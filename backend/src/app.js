const express = require('express');
const cors = require('cors');
const app = express();

const Students = require('./routes/Student.routes');
const CourseLevel = require('./routes/CoursesLevel.routes');
const Classroom = require('./routes/Classroom.routes');
const Lenguages = require('./routes/Lenguages.routes');
const SchoolPeriods = require('./routes/SchoolPeriods.routes');
const Group = require('./routes/Group.routes');


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