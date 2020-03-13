const { Router } = require('express');
const router = Router();
const {
    getStudentsApi,
    getStudents,
    getStudenNumControlApi,
    createStudent,
    updateStudent,
    deleteStudent, 
    getStudenNumControlLocal} = require('../controllers/student.controller');

//----- consulta a a api -------//
router.route('/api')
    .get(getStudentsApi)

router.route('/api/:numero_control')
    .get(getStudenNumControlApi)

//------consultas locales-------//

router.route('/')
    .get(getStudents)
    .post(createStudent)

router.route('/:id')
    .put(updateStudent)
    .delete(deleteStudent)

router.route('/:numero_control')
    .get(getStudenNumControlLocal)

module.exports = router;