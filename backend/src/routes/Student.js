const { Router } = require('express');
const router = Router();
const {getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent } = require('../controllers/student.controller');

router.route('/')
    .get(getStudents)
    .post(createStudent)

router.route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent)

module.exports = router;