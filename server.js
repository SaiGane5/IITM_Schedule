import express from 'express';
import bodyParser from 'body-parser';
import schedule from './schedule.js';
import path from 'path';
import { fileURLToPath } from 'url';
import nodeSchedule from 'node-schedule';
import notifier from 'node-notifier';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();

// Set the views directory and view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

const scheduleNotifications = () => {
    const now = new Date();
    const day = now.getDay();

    if (day !== 0 && day !== 6) { // If it's a weekday
        schedule[day].forEach(course => {
            const courseStart = new Date(course.StartTime);
            if (courseStart > now) {
                const notificationTime = new Date(courseStart.getTime() - 10 * 60000);
                nodeSchedule.scheduleJob(notificationTime, () => {
                    notifier.notify({
                        title: 'Course Reminder',
                        message: `Upcoming Course: ${course.CourseName} at ${course.location}`,
                        icon: course.ProfImage,
                        sound: true
                    });
                });
            }
        });
    }
};

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
        let found = false;
        for (let i = 0; i < schedule[day].length; i++) {
            const start = new Date(schedule[day][i].StartTime);
            const end = new Date(schedule[day][i].EndTime);

            if (date >= start && date < end) {
                const course = schedule[day][i];
                const nextCourse = schedule[day][i + 1] || schedule[day][0];
                const nexttime = new Date(nextCourse.StartTime);
                const nexttimeInIST = nexttime.toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                });

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
                    nextCourse: nextCourse.CourseName,
                    nextVenue: nextCourse.location,
                });
                found = true;
                break;
            }
        }
        if (!found) {
            res.send('<body style="display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; font-family: Arial;"><div style="background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"><h1 style="color: #333; text-align: center;">No current classes.</h1></div></body>');
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    scheduleNotifications();
});
