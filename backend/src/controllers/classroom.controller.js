const classroomCtrl = {};
const Classroom = require('../models/Classroom.model');

classroomCtrl.getClassrooms = async(req,res)=>{
  const classrooms =  await  Classroom.find();
    res.json(classrooms)
}

classroomCtrl.getClassroom = async (req, res)=>{
    try {
        const classroom= await Classroom.findById(req.params.id);
        res.json(classroom);
    } catch (error) {
        res.status(400).json
    }
}

classroomCtrl.createClassroom = async(req, res)=>{
    try {
        const {name,
            location,
            size, 
            description,
            status } = req.body;

        const newClassroom= new Classroom({name,
            location,
            size,
            description,
            status});
        await newClassroom.save();
        res.json('aula creada');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
}

classroomCtrl.updateClassroom = async(req, res)=> {
  const {name,
      location,
      size,
      description,
      status}  = req.body; //destructuracion

  await Classroom.findOneAndUpdate(req.params.id,{
    name,
    location,
    size,
    description,
    status
  })
  res .json({message: 'Aula actualizado'})
  console.log('Aula actializada')
}
module.exports = classroomCtrl;




// courseLevelCtrl.deleteCoursesLevel = async (req, res) => {
//     const { id } = req.params;
//     await CoursesLevel.findByIdAndDelete(id);
//     res.json('courso elimindado');
//}


// classroomCtrl.getClassrooms = async(req,res)=>{
//     try {
//         const classrooms = await Classroom.find();
//         res.status(200).json(classrooms);
//     }
//     catch (err) {
//         res.status(400).json({
//             error: err
//         });
//     }

// }


// classroomCtrl.getClassrooms = async(req,res)=>{
//     try {
//       const classrooms = await Classroom.find();
//       res.status(200).json(
//         classrooms
//       );
//     } catch (error) {
//       res.status(400).json({
//         status: "failed",
//         message: error
//       });
//     }
//   };