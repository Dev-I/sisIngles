const {Schema, model} = require ('mongoose');
// const  CourseLevel = require('./CourseLevel.model');

const studentSchema = new Schema(
    {
        registration_number:{
            type: String,
            unique:true
        }
    },
    {
        timestamps: true
    }
        
)
module.exports = model('Student', studentSchema);