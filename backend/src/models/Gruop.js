const {Schema, model} = require ('mongoose');
import Student from './Estudiante';
import Specialism from './Specialism';


const groupSchema = new Schema(
    {
        name:{//nombre del grupo
            type:String,
            required: true
        },
        term: { //Periodo
            type: Schema.ObjetId,
            ref: Periodo
        },
        size:Number, //capcidad del grupo
        Student: { //refferencia al documento Studente= Estudiante
            type: Schema.ObjetId,
            ref: "Student"
        },
        specialism:{ //referencia a al documento Specialism=Especialidad
            type: Schema.ObjetId,
            ref: "Specialism"
        }

       
    }
)
module.exports = model('Group', groupSchema);