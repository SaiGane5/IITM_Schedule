const slot = {
    A: {
        location: "MSB 245",
        credits: 10,
        ProfImage: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=kNu5UuIAAAAJ&citpid=8",
        ProfName: "Anil Meena",
        CourseNum: "ME3301",
        CourseName: "Manufacturing Technology",
    },
    B: {
        location: "CRC 204",
        credits: 10,
        ProfImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcF4S9Azg0eZykVhggt4X4Mn3nHzkH_H0_Q&s",
        ProfName: "Dhiman Chatterjee",
        CourseNum: "ME3103",
        CourseName: "Energy Conversion System",
    },
    C: {
        location: "CRC 204",
        credits: 10,
        ProfImage: "https://home.iitm.ac.in/skdas/images/skd.jpg",
        ProfName: "Sarit Kumar Das",
        CourseNum: "ME3101",
        CourseName: "Heat transfer",
    },
    F: {
        location: "MSB 243",
        credits: 10,
        ProfImage: "https://home.iitm.ac.in/mpandey/manojPicture.jpg",
        ProfName: "Manoj Pandey",
        CourseNum: "ME3201",
        CourseName: "Design of Machine Elements",
    },
    T: {
        location: "Machine Design Section, NAC",
        credits: 7,
        ProfImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kPGqS3RIOW2xy7D4PNE9rl6q0O1r9c5rRB-B5u39juOiskBnkupIw8ufOD1JmaiwgC4&usqp=CAU",
        ProfName: "Saurav Rakshit",
        CourseNum: "ME3281",
        CourseName: "Machine Drawing Practice",
    },
    S: {
        location: "MSB",
        credits: 3,
        ProfImage: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=RSHzl7cAAAAJ&citpid=2",
        ProfName: "Prabhu RajaGopal",
        CourseNum: "ME3481",
        CourseName: "Mechanical Engineering, Lab II",
    },
    LifeSkills: {
        location: "Campus Cafe Terrace",
        credits: 9,
        ProfImage: "https://home.iitm.ac.in/mssiva/index_files/image003.jpg",
        ProfName: "Siva kumar",
        CourseNum: "GN6106",
        CourseName: "Happiness, Habits and Success",
    }
}
const Schedule = [
    [
        {
            description: "It's holiday, Enjoy the day",
        },

    ],
    [
        {
            StartTime: new Date().setUTCHours(2,0),
            EndTime: new Date().setUTCHours(3,20),
            location: slot.A.location,
            credits: slot.A.credits,
            ProfImage: slot.A.ProfImage,
            ProfName: slot.A.ProfName,
            CourseNum: slot.A.CourseNum,
            CourseName: slot.A.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(3, 20),
            EndTime: new Date().setUTCHours(4, 20),
            location: slot.B.location,
            credits: slot.B.credits,
            ProfImage: slot.B.ProfImage,
            ProfName: slot.B.ProfName,
            CourseNum: slot.B.CourseNum,
            CourseName: slot.B.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(4, 20),
            EndTime: new Date().setUTCHours(5, 20),
            location: slot.C.location,
            credits: slot.C.credits,
            ProfImage: slot.C.ProfImage,
            ProfName: slot.C.ProfName,
            CourseNum: slot.C.CourseNum,
            CourseName: slot.C.CourseName,
        },
    ],
    [
        {
            StartTime: new Date().setUTCHours(2, 0),
            EndTime: new Date().setUTCHours(3, 20),
            location: slot.B.location,
            credits: slot.B.credits,
            ProfImage: slot.B.ProfImage,
            ProfName: slot.B.ProfName,
            CourseNum: slot.B.CourseNum,
            CourseName: slot.B.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(3, 20),
            EndTime: new Date().setUTCHours(4, 20),
            location: slot.C.location,
            credits: slot.C.credits,
            ProfImage: slot.C.ProfImage,
            ProfName: slot.C.ProfName,
            CourseNum: slot.C.CourseNum,
            CourseName: slot.C.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(6, 57),
            EndTime: new Date().setUTCHours(8, 20),
            location: slot.A.location,
            credits: slot.A.credits,
            ProfImage: slot.A.ProfImage,
            ProfName: slot.A.ProfName,
            CourseNum: slot.A.CourseNum,
            CourseName: slot.A.CourseName,
        }
    ],
    [
        {
            StartTime: new Date().setUTCHours(2, 0),
            EndTime: new Date().setUTCHours(3, 20),
            location: slot.C.location,
            credits: slot.C.credits,
            ProfImage: slot.C.ProfImage,
            ProfName: slot.C.ProfName,
            CourseNum: slot.C.CourseNum,
            CourseName: slot.C.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(5, 0),
            EndTime: new Date().setUTCHours(6, 20),
            location: slot.F.location,
            credits: slot.F.credits,
            ProfImage: slot.F.ProfImage,
            ProfName: slot.F.ProfName,
            CourseNum: slot.F.CourseNum,
            CourseName: slot.F.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(7, 0),
            EndTime: new Date().setUTCHours(8, 20),
            location: slot.B.location,
            credits: slot.B.credits,
            ProfImage: slot.B.ProfImage,
            ProfName: slot.B.ProfName,
            CourseNum: slot.B.CourseNum,
            CourseName: slot.B.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(12, 0),
            EndTime: new Date().setUTCHours(15, 0),
            location: slot.LifeSkills.location,
            credits: slot.LifeSkills.credits,
            ProfImage: slot.LifeSkills.ProfImage,
            ProfName: slot.LifeSkills.ProfName,
            CourseNum: slot.LifeSkills.CourseNum,
            CourseName: slot.LifeSkills.CourseName,
        }
    ],
    [
        {
            StartTime: new Date().setUTCHours(3, 0),
            EndTime: new Date().setUTCHours(4, 20),
            location: slot.F.location,
            credits: slot.F.credits,
            ProfImage: slot.F.ProfImage,
            ProfName: slot.F.ProfName,
            CourseNum: slot.F.CourseNum,
            CourseName: slot.F.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(5, 0),
            EndTime: new Date().setUTCHours(6, 20),
            location: slot.A.location,
            credits: slot.A.credits,
            ProfImage: slot.A.ProfImage,
            ProfName: slot.A.ProfName,
            CourseNum: slot.A.CourseNum,
            CourseName: slot.A.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(8, 0),
            EndTime: new Date().setUTCHours(11, 15),
            location: slot.S.location,
            credits: slot.S.credits,
            ProfImage: slot.S.ProfImage,
            ProfName: slot.S.ProfName,
            CourseNum: slot.S.CourseNum,
            CourseName: slot.S.CourseName,
        },
    ],
    [
        {
            StartTime: new Date().setUTCHours(2, 0),
            EndTime: new Date().setUTCHours(3, 20),
            location: slot.F.location,
            credits: slot.F.credits,
            ProfImage: slot.F.ProfImage,
            ProfName: slot.F.ProfName,
            CourseNum: slot.F.CourseNum,
            CourseName: slot.F.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(4, 20),
            EndTime: new Date().setUTCHours(5, 20),
            location: slot.A.location,
            credits: slot.A.credits,
            ProfImage: slot.A.ProfImage,
            ProfName: slot.A.ProfName,
            CourseNum: slot.A.CourseNum,
            CourseName: slot.A.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(5, 20),
            EndTime: new Date().setUTCHours(6, 20),
            location: slot.B.location,
            credits: slot.B.credits,
            ProfImage: slot.B.ProfImage,
            ProfName: slot.B.ProfName,
            CourseNum: slot.B.CourseNum,
            CourseName: slot.B.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(7, 0),
            EndTime: new Date().setUTCHours(8, 20),
            location: slot.C.location,
            credits: slot.C.credits,
            ProfImage: slot.C.ProfImage,
            ProfName: slot.C.ProfName,
            CourseNum: slot.C.CourseNum,
            CourseName: slot.C.CourseName,
        },
        {
            StartTime: new Date().setUTCHours(8, 20),
            EndTime: new Date().setUTCHours(11, 15),
            location: slot.T.location,
            credits: slot.T.credits,
            ProfImage: slot.T.ProfImage,
            ProfName: slot.T.ProfName,
            CourseNum: slot.T.CourseNum,
            CourseName: slot.T.CourseName,
        }
    ],
    [
        {
            description: "It's holiday, enjoy the day",
        }
    ]
]

// Update the Start and End times in the Schedule array
// Schedule.forEach(slot => {
//     slot.forEach(item => {
//         if (item.StartTime && item.EndTime) {
//             item.StartTime = convertUTCtoIST(new Date(item.StartTime));
//             item.EndTime = convertUTCtoIST(new Date(item.EndTime));
//         }
//     });
// });

export default Schedule;