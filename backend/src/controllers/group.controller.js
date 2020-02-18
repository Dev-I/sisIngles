const groupCtrl = {}
const Group = require('../models/Group.model');
const Students = require('../models/Student.model');
// const Periods = require('../models/SchoolPeriods.model');
// const Lenguage = require('../models/Lenguage.model');
// const Level =  require('../models/CourseLevel.model');


groupCtrl.getGroups= async(req,res)=>{
  const groups = await Group.find();
  res.json(groups)

}

groupCtrl.createGroup = async(req,res)=>{

    try{
        const{
          name,
          size,
          Period,
          Student,
          Lenguage,
          Classrooms,
          schedule,
          level
         } = req.body;

         const newGroup = new Group({
          name,
          size,
          Period,
          Student,
          Lenguage,
          Classrooms,
          schedule,
          level
         })
         await newGroup.save()
         res.json(newGroup)
         console.log('[grupo guardado]')
    }catch(e){
      console.log(e.errmsg)
      res.json(e.errmsg)
    }
}


groupCtrl.addStudentsAtGroup = async(req,res) => {
  try {
    const group = await Group.findById(req.params.idgroup)
    const student = await Students.findById(req.params.idstudent)
    const newStudents = new Students(student)
      await newStudents.save()
      console.log(newStudents)
      group.Students.push(newStudents)
      await group.save()   
      console.log("[alumno agregado al grupo]")
      res.json(group)
  } catch (error) {
    console.log(error.message)
  }
}

groupCtrl.deleteStudentAtGroup = async(req, res)=>{
  try {
    const group = await Group.findById(req.params.idgroup)
    const student = await Students.findById(req.params.idstudent)
      group.Students.pull(student)
      await group.save()   
      console.log("[alumno eliminado del grupo]")
      res.json(group)
  } catch (error) {
    console.log(error.message)
  }
}

    


module.exports = groupCtrl;