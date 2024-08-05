import express from 'express';
import bodyParser from 'body-parser';
import schedule from './schedule.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

// Set the views directory and view engine
app.set('views', path.join(__dirname, '../frontend'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// function convertUTCtoIST(utcDate) {
//     const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
//     return new Date(utcDate.getTime() + istOffset);
// }
app.get('/', (req, res) => {
    const date = new Date();

    const day = date.getDay();

    const timeInIST = date.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    console.log(timeInIST);

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
                });
                console.log(date);
                return;
            }
        }
        res.send('<body style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; font-family: Arial;"><div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"><h1 style="color: #333; text-align: center;">No current classes.</h1></div></body>');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});