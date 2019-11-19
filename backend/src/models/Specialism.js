const {Schema, model} = require ('mongoose');

const specialismSchema = new Schema(
    {
        name:{//nombre de la especialidad o Lenguaje que se impartira
            type: String,
            required: true
        }

    }
)