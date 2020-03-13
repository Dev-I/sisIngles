const { Router } = require('express');
const router = Router();

const {getLenguages,
       createLenguage,
       getLenguage } = require('../controllers/lenguage.controller');

router.route('/')
    .get(getLenguages)
    .post(createLenguage)

router.route('/:id')
    .get(getLenguage)
    // .put(updateClassroom)
    // .delete(deleteStudent)

// router.route('/:numero_control')
//     .get(getStudentNumero_control)

module.exports = router;