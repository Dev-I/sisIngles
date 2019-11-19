const {Schema, model} = require ('mongoose');
const  CourseLevel = require('./CourseLevel');

const estudianteSchema = new Schema(
    {
        
    
        idStudent:{
            type: String
        },
        course_level:{ //nivel de curso de ingles
           type: Schema.ObjectId, 
           ref:"CourseLevel"
        },
       
    },
    {
        timestamps: true
    }
        
)
module.exports = model('Estudiante', estudianteSchema);