const express = require('express');
const cors = require('cors');
const app = express();
const {request, GraphQLClient} = require ('graphql-request')

//settings
app.set('port',process.env.PORT || 4000)

//middlewares
app.use(cors())
app.use(express.json());

//routes
app.use('/backend/students', require('./routes/Student'));//recuerda que cuando se requiera se separan las rutas se opcupa el "use"
app.use('/backend/courses-level', require('./routes/CoursesLevel'));
app.use('/backend/teachers',(re, res)=>{
    res.send('teachers')});

module.exports = app;