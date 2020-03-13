const {Schema, model} = require ('mongoose');

const classrooSchema = new Schema(
{
    name: { // nombre del aula
        type:String,
        required: true
    },
    
    location: { //ubicacion 
        type:String,
        required: true
    },
    size: {//capacidad maxima del aula
        type: Number,
    },
    description: { //descripcion
        type:String,
    },
    status: Boolean,  //estatus del aula
}

)

module.exports = model ('Classroom', classrooSchema)
