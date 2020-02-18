const { Router } = require('express');
const router = Router();
const { getClassrooms,
    getClassroom, 
    createClassroom,
    updateClassroom} = require('../controllers/classroom.controller');

router.route('/')
    .get(getClassrooms)
    .post(createClassroom)

router.route('/:id')
    .get(getClassroom)
    .put(updateClassroom)
    // .delete(deleteStudent)

// router.route('/:numero_control')
//     .get(getStudentNumero_control)

module.exports = router;