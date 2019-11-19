const {Schema, model} = require ('mongoose');

const termSchema = new Schema(
    {
        year: {
            type: Number, //año en el que se crea el curso a abrir
            required: true
        },
        term:{
            type: Number, //numero del periodo, 1= Enero-Junio 2=Verano 3=Agosto-Diciembre
            required: true
        },
        start: {
            type:String, //fecha de inicio del curso
            required:true
        },
        finish: { 
            type:String, //fecha de terminacion del curso
            required:true
        }

    }
)
module.exports = model ('Term', termSchema)