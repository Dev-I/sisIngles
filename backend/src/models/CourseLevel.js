const {Schema, model} = require ('mongoose');
const Term = require('./Term');

const courseLevelSchema = new Schema(
    {
        name:{ //
            type: String,
            required: true,
            unique: true
        },
        course_level:{
            type: Number,
            required: true,
            unique: true
        }
        
    }
)

module.exports = model ('CourseLevel', courseLevelSchema)