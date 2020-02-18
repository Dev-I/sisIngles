const SchoolPeriodsCtrl = {}
const SchoolPeriods = require('../models/SchoolPeriods.model');

    SchoolPeriodsCtrl.getSchoolPeriods = async(req, res)=>{
        const schoolperiods = await SchoolPeriods.find()
        res.json(schoolperiods)
    }

    SchoolPeriodsCtrl.createSchoolPeriods = async (req, res)=>{
        try {
            const {
                year,
                period,
                start, 
                finish
            } = req.body;

            const newSchoolPerido = new SchoolPeriods({
                year,
                period,
                start, 
                finish
            });

            await newSchoolPerido.save();
            
            res.json(newSchoolPerido)
            console.log('periodo creado')
        } catch (e) {
            console.log(e)
            res.json(e.errmsg)
        }
    }

module.exports = SchoolPeriodsCtrl;


