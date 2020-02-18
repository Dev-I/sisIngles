const {Schema, model} = require ('mongoose');


const teacherSchema = new Schema(
    {
        name:{
            type: String,

        },
        lastname,
        rfc,
        curp,
        phone,
        domicilio,
        email,

       
    }
)  
module.exports = model('Docente', teacherSchema);