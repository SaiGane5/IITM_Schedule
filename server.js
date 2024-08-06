import express from 'express';
import bodyParser from 'body-parser';
import schedule from './schedule.js';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'pg';
const { Pool } = pkg;
import cors from 'cors';
import methodOverride from 'method-override';
import dotenv from "dotenv";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();
// Add methodOverride middleware
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// To-Do Routes
app.get('/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos');
        res.render('todo', { todos: result.rows });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/todos', async (req, res) => {
    const { task } = req.body;
    try {
        await pool.query('INSERT INTO todos (task) VALUES ($1)', [task]);
        res.redirect('/todos'); // Redirect to the todos page
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    try {
        await pool.query('UPDATE todos SET completed = $1 WHERE id = $2', [completed, id]);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM todos WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/', (req, res) => {
    const date = new Date();

    const day = date.getDay();

    const timeInIST = date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    if (day === 0 || day === 6) {
        res.render('weekend', {
            description: schedule[day][0].description,
        });
    } else {
        for (let i = 0; i < schedule[day].length; i++) {
            const start = new Date(schedule[day][i].StartTime);
            const end = new Date(schedule[day][i].EndTime);

            if (date >= start && date < end) {
                const credit = schedule[day][i].credits;
                const loc = schedule[day][i].location;
                const profname = schedule[day][i].ProfName;
                const profimage = schedule[day][i].ProfImage;
                const crnum = schedule[day][i].CourseNum;
                const crname = schedule[day][i].CourseName;

                const nextCourse = schedule[day][i + 1] || schedule[day][0];
                const nexttime = new Date(nextCourse.StartTime);
                const nexttimeInIST = nexttime.toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                });
                const nextcr = nextCourse.CourseName;
                const nextvenue = nextCourse.location;

                res.render('weekday', {
                    Time: timeInIST,
                    Date: date.toDateString(),
                    Day: day,
                    credits: credit,
                    location: loc,
                    ProfName: profname,
                    ProfImage: profimage,
                    CourseNum: crnum,
                    CourseName: crname,
                    nextTime: nexttimeInIST,
                    nextCourse: nextcr,
                    nextVenue: nextvenue,
                });
                return;
            }
        }
        res.send('<body style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; font-family: Arial;"><div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"><h1 style="color: #333; text-align: center;">No current classes.</h1></div></body>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
