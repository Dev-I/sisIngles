const { Router }= require('express');
const router = Router();
const {
     getSchoolPeriods,
     createSchoolPeriods
    }  = require('../controllers/schoolperiods.controller');


router.route('/')
       .get(getSchoolPeriods) 
       .post(createSchoolPeriods)



module.exports= router