const {Schema, model} = require ('mongoose');

const SchoolPeriodsSchema = new Schema(
    {
        year: {
            type: Number, //año en el que se crea el curso a abrir
            required: true
        },
        period:{
            type: String, //numero del periodo, 1= Enero-Junio 2=Verano 3=Agosto-Diciembre
            required: true
        },
        start: {
            type:Date,
            //default: Date.now, //fecha de inicio del curso
            required:true
        },
        finish: { 
            type:Date,
            //default: Date.now, //fecha de fin del curso
            required:true
        }

    }
)
module.exports = model ('SchoolPeriods', SchoolPeriodsSchema)