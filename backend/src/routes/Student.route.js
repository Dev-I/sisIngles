const { Router } = require('express');
const router = Router();
const {getStudents,
    getStudentNumero_control,
    createStudent,
    updateStudent,
    deleteStudent } = require('../controllers/student.controller');

router.route('/')
    .get(getStudents)
    .post(createStudent)

router.route('/:id')
    .put(updateStudent)
    .delete(deleteStudent)

router.route('/:numero_control')
    .get(getStudentNumero_control)

module.exports = router;