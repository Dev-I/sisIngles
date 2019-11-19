const {Router} = require('express');
const router = Router();
const {getCourseLevels,
       getCourseLevel, 
       createCoursesLevel, 
       updateCourseLevel, 
       deleteCoursesLevel } =require ('../controllers/courselevel.controller')

router.route('/')
       .get(getCourseLevels)
       .get(getCourseLevel)
       .post(createCoursesLevel)
   
router.route('/:id')
       .put(updateCourseLevel)
       .delete(deleteCoursesLevel)
   
module.exports = router;