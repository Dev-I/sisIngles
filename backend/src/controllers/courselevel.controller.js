const courseLevelCtrl = {};

const CoursesLevel = require('../models/CourseLevel');

courseLevelCtrl.getCourseLevels = async(req,res)=>{
    try {
        const coursesLevel = await CoursesLevel.find();
        res.json(coursesLevel);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

courseLevelCtrl.getCourseLevel = async (req, res)=>{
    try {
        const coursesLevel= await CoursesLevel.findOne();
        res.json(coursesLevel);
    } catch (error) {
        res.status(400).json
    }
}

courseLevelCtrl.updateCourseLevel = async(req, res)=> {
    const {name,
           course_level}  = req.body; //destructuracion

    await Student.findOneAndUpdate(req.params.id,{
        name,
        course_level
    })
    res .json({message: 'curso actualizado'})
}

courseLevelCtrl.createCoursesLevel = async(req, res)=>{
    try {
        const { name, course_level } = req.body;

        const newCoursesLevel= new CoursesLevel({ name, course_level  });
        await newCoursesLevel.save();
        res.json('nivel creado');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

courseLevelCtrl.deleteCoursesLevel = async (req, res) => {
    const { id } = req.params;
    await CoursesLevel.findByIdAndDelete(id);
    res.json('courso elimindado');
}
module.exports = courseLevelCtrl;