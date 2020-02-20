const studentCtrl = {};
const { request} = require ('graphql-request')
const endpoint = "http://api-iti.herokuapp.com/graphql";
const queries = require('../queries/queriesStudent');
const Student = require('../models/Student.model');

// studentCtrl.getStudents = async (req, res) => {
//     try {
//         const data = await request (endpoint, queries.getStudents)
//         //console.log(JSON.stringify(data.getStudents,undefined,2))
//         console.log("[ datos del estidiante recibidos ]")
//         res.status(200).json({
//            // status: "datos recibidos",
//             students: data.getStudents
//         })
//     }
//     catch (err) {
//         res.status(400).json({
//             error: err
//         });
//     }
// };


studentCtrl.getStudents = async(req,res)=>{
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

studentCtrl.getStudentNumero_control = async (req, res) => {
    try {
        const students = {
            numero_control: req.params.numero_control
        }
        const data = await request(endpoint, queries.getStudentNumero_control, students)
        console.log(JSON.stringify(data.getStudentNumero_control, undefined, 2))
        res.status(200).json({
            status:"succes",
            students: data.getStudentNumero_control 
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
        const {
            registration_number }  = req.body;

        const newStudent = new Student({
            registration_number });
        await newStudent.save();
        const students = await Student.find();
        res.json(students);
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
    await Student.findByIdAndDelete(req.params.id);
    res.json('Estudiante eliminado');
}
 
module.exports = studentCtrl; 



// studentCtrl.getStudent = async (req, res) => {
//     try {
//         const student = {
//             id: req.params.id
//         }
//         const data = await request(endpoint, queries.getStudent, student)
//         console.log(JSON.stringify(data.getStudent, undefined, 2))
//         res.status(200).json({
//             status:"succes",
//             student: data.getStudent 
//         })
//     }
//     catch (err) {
//         res.status(400).json({
//             status:"Fail",
//             message: error
//         });
//     }
// };