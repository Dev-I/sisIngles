const {Router} = require('express');
const router = Router();

const { createGroup,
        getGroups,
        addStudentsAtGroup,
        deleteStudentAtGroup }= require('../controllers/group.controller');

router.route('/')
    .post(createGroup)
    .get(getGroups)

router.route('/:idgroup/student/:idstudent')
    .post(addStudentsAtGroup)
    .delete(deleteStudentAtGroup)

module.exports = router