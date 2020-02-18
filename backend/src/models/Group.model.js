const {Schema, model} = require ('mongoose');

const groupSchema = new Schema(
    {
        name:{//nombre del grupo
            type:String,
            required: true
        },
        size:{//tamaño del grupo
            type: Number
             }, 
        Period: {//periodo al que pertenece
            type: Schema.Types.ObjectId,
            ref: 'SchoolPeriods'
        },
        Lenguage:{ //idioma a enseñar
            type: Schema.Types.ObjectId,
            ref: 'Lenguage'
        },
         Students: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }],
        Classrooms:[{
            aulaLunes:{
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            aulaViernes:{
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            aulaLMartes:{
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            aulaMiercoles:{
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            aulaJueves:{
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            aulaSabado:{
                type: Schema.Types.ObjectId,
                ref: 'Classroom'
            },
            
        }],
        schedule:[{ //horario
            day: String,
            hourStart:[{
                InicioLunes:String,
                InicioMartes:String,
                InicioMiercoles:String,
                InicioJueves:String,
                InicioViernes:String,
                InicioSabado:String
        }],
            hourFinish:[{
                FinLunes:String,
                FinMartes:String,
                FinMiercoles:String,
                FinJueves:String,
                FinViernes:String,
                FinSabado:String
            }],
        }],

        level: {
           type: Number,
           required: true

        }
    }    
)
module.exports = model('Group', groupSchema);