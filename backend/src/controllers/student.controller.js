const studentCtrl = {};
const { request} = require ('graphql-request')
const endpoint = "http://api-iti.herokuapp.com/graphql";
const queries = require('../queries/queriesStudent');
const Student = require('../models/Student');

studentCtrl.getStudents = async (req, res) => {
    try {
        // const student = await Student.find();
        // res.json(student);
        const data = await request (endpoint, queries.getStudents)
        console.log(JSON.stringify(data.getStudents,undefined,2))
        res.status(200).json({
            status:"succes",
            students: data.getStudents 
        })
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

studentCtrl.getStudent = async (req, res) => {
    try {
        const student = {
            id: req.params.id
        }
        const data = await request(endpoint, queries.getStudent, student)
        console.log(JSON.stringify(data.getStudent, undefined, 2))
        res.status(200).json({
            status:"succes",
            student: data.getStudent 
        })
    }
    catch (err) {
        res.status(400).json({
            status:"Fail",
            message: error
        });
    }
};

studentCtrl.createStudent = async (req, res) => {
    try {
        const {name,
            enrollment,
            phone,
            professional_career,
            email,
            course_level}  = req.body;

        const newStudent = new Student({
                name,
                enrollment,
                phone,
                professional_career,
                email,
                course_level});
        await newStudent.save();
        res.json('Estudiante creado');
        console.log('datos guardados');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

studentCtrl.updateStudent = async(req, res)=> {
    const {name,
        enrollment,
        phone,
        professional_career,
        email,
        course_level}  = req.body; //destructuracion

    await Student.findOneAndUpdate(req.params.id,{
        name,
        enrollment,
        phone,
        professional_career,
        email,
        course_level
    })
    res .json({message: 'Note update'})
}

studentCtrl.deleteStudent = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json('Estudiante eliminado');
}

module.exports = studentCtrl;