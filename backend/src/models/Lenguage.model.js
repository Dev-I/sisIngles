const {Schema, model} = require ('mongoose');

const LeguageSchema = new Schema(
    {
        key:{
            type: String,
            //required: true
        },
        lenguage:{ //nombre de la especialidad o Lenguaje que se impartira
            type: String,
            //required: true
        },

    }
)

module.exports = model('Lenguage', LeguageSchema)