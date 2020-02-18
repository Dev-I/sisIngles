const {Schema, model} = require ('mongoose');
// const  CourseLevel = require('./CourseLevel.model');

const studentSchema = new Schema(
    {
        name:{
            type: String
        },
        registration_number:{
            type: String
        }
    },
    {
        timestamps: true
    }
        
)
module.exports = model('Student', studentSchema);