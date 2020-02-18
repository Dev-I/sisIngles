const express = require('express');
const cors = require('cors');
const app = express();

const Students = require('./routes/Student.route');
const CourseLevel = require('./routes/CoursesLevel.route');
const Classroom = require('./routes/Classroom.route');
const Lenguages = require('./routes/Lenguages.route');
const SchoolPeriods = require('./routes/SchoolPeriods.route');
const Group = require('./routes/Group.route');


//settings
app.set('port',process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json());

//routes
app.use('/backend/students', Students);

app.use('/backend/courses-level', CourseLevel);

app.use('/backend/classrooms',Classroom)

app.use('/backend/lenguages', Lenguages);

app.use('/backend/periods', SchoolPeriods)

app.use('/backend/groups', Group)

//app.use('/backend/teachers',(re, res)=>{ res.send('teachers')});

module.exports = app; 