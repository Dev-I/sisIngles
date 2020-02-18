import React,{Component, Fragment} from 'react'
import Axios from 'axios'


export default class RegisterGroup extends Component{
    state = { 
        classrooms:[],
        lenguages:[],
        periods:[],
        name: '',
        Classrooms:[{
            aulaLunes:'',
            aulaViernes:'',
            aulaLMartes:'',
            aulaMiercoles:'',
            aulaJueves:'',
            aulaSabado:''
        }],
        Lenguage:'',
        size:'',
        level: '',
        Period:'',
        schedule:[{
            day:'',
            hourStart:[{
                    InicioLunes:'',
                    InicioMartes:'',
                    InicioMiercoles:'',
                    InicioJueves:'',
                    InicioViernes:'',
                    InicioSabado:''
                }],
                hourFinish:[{
                    FinLunes:'',
                    FinMartes:'',
                    FinMiercoles:'',
                    FinJueves:'',
                    FinViernes:'',
                    FinSabado:''
                }],
        }]
    }
    //new Date().getHours

    async componentDidMount(){
        this.getIdiomas()
        this.getAulas()
        this.getPeriodos()
    }
    onInputChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = async(e)=>{
        e.preventDefault()
        const newGroup = {
            name:this.state.name,
            level:this.state.level,
            Period: this.state.Period,
            Lenguage: this.state.Lenguage,
            size:this.state.size,
            schedule:[{
                hourStart:[{
                    InicioLunes:this.state.InicioLunes,
                    InicioMartes:this.state.InicioMartes,
                    InicioMiercoles:this.state.InicioMiercoles,
                    InicioJueves:this.state.InicioJueves,
                    InicioViernes:this.state.InicioViernes,
                    InicioSbado: this.state.InicioSabado

                }],
                hourFinish:[{
                    FinLunes:this.state.FinLunes,
                    FinMartes:this.state.FinMartes,
                    FinMiercoles:this.state.FinMiercoles,
                    FinJueves:this.state.FinJueves,
                    FinViernes:this.state.FinViernes,
                    FinSabado:this.state.FinSabado,
                }],
            }],
            Classrooms:[{
                aulaLunes:this.state.aulaLunes,
                aulaViernes:this.state.aulaViernes,
                aulaLMartes:this.state.aulaMartes,
                aulaMiercoles:this.state.aulaMiercoles,
                aulaJueves:this.state.aulaJueves,
                aulaSabado: this.state.aulaSabado
                
            }]
    
        }
        console.log('Data: ',newGroup)
        await Axios.post('http://localhost:4000/backend/groups', newGroup)
       //console.log(rest.data)
    }

    getIdiomas = async()=>{
        const res= await Axios.get('http://localhost:4000/backend/lenguages')
        this.setState({ lenguages: res.data })
        console.log('idiomas', this.state.lenguages)
        }
    
     getAulas = async ()=>{
         const res= await Axios.get('http://localhost:4000/backend/classrooms')
         this.setState({classrooms: res.data})
         console.log('aulas', this.state.classrooms)
     }

     getPeriodos = async()=>{
        const res= await Axios.get('http://localhost:4000/backend/periods')
        this.setState({periods: res.data})
        console.log('periodos', this.state.periods)
     }
        
render(){
return(
<Fragment>
    <div className="content-fluid">
        <h2 className="text-center">Registro de Grupos-Horarios</h2>
    </div>
    <div className="content-fluid">
        <div className="card">
            <div className="card-header card-header-primary">
                <h4 className="card-title"> Asignacion de Horarios - Grupos</h4>
                <p className="card-category">Complete el formulario para registrar una nueva aula</p>
            </div>
            <div className="card-body">
                <div className="row justify-content-center">
                     <form className="col-xl-10 m-3" onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputState" className="bmd-label-floating"> Periodo </label>
                                    <select  className="form-control" name="Period" onChange={this.onInputChange} value={this.state.Period}>
                                            <option value="">Selecciona el periodo </option>
                                            { this.state.periods.map(period=>
                                            <option key={period._id}  value={period._id}>{period.period}</option>
                                            ) }
                                        </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="bmd-label-floating">Nivel de curso</label>
                                    <input type="text" name="level" className="form-control" onChange={this.onInputChange} value={this.state.level}/>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="bmd-label-floating">Nombre del Grupo </label>
                                    <input type="text" name="name" className="form-control" onChange={this.onInputChange} value={this.state.name}/>
                                </div>
                              
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" className="bmd-label-floating"> Idioma </label>
                                    <select className="form-control" name="Lenguage" onChange={this.onInputChange} value={this.state.Lenguage}>
                                        <option value="">Selecciona el idioma</option>
                                        {this.state.lenguages.map(lenguage=>
                                            
                                        <option key={lenguage._id} value={lenguage._id}>{lenguage.lenguage}</option>
                                        )}
                                    </select>
                                </div>
                            
                                <div className="form-group col-md-3">
                                    <label  className="bmd-label-floating">Capacidad</label>
                                    <input type="text" className="form-control" name="size" onChange={this.onInputChange} value={this.state.size} />
                                </div>
                                  
                             </div>
                            <div className="card">
                            <div className="card-header card-header-primary">
                                <h4 className="card-title"> Asignacion de horas y salones Grupos</h4>
                                <p className="card-category">Asigne las horas a al grupo</p>
                            </div>
                                <table className="table">
                                <thead>
                                    <tr className="text-center">
                                        <th width="60">Dia</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                        <th>Miercoles</th>
                                        <th>Jueves</th>
                                        <th>Viernes</th>
                                        <th>Sabado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-center">
                                        <td width="60">Inicial</td>
                                        <td> <input type="time" name ="InicioLunes"   className="form-control text-center" onChange={this.onInputChange}
                                         value={this.state.InicioLunes}/></td>

                                        <td> <input type="time" name ="InicioMartes" className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.InicioMartes} /></td>

                                        <td><input type="time"  name ="InicioMiercoles"  className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.InicioMiercoles}/></td>

                                        <td><input type="time"  name ="InicioJueves"  className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.InicioJueves} /> </td>

                                        <td><input type="time"  name ="InicioViernes"   className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.InicioViernes} /> </td>

                                        <td><input type="time"  name ="InicioSabado"className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.InicioSabado}/></td>
                                    </tr>

                                    <tr className="text-center">
                                        <td width="60">Final</td>

                                        <td> <input type="time" name ="FinLunes"  className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.FinLunes}/></td>

                                        <td> <input type="time" name ="FinMartes"   className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.FinMartes}/></td>

                                        <td><input type="time"  name ="FinMiercoles"   className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.FinMiercoles}/></td>

                                        <td><input type="time"  name ="FinJueves"    className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.FinJueves} /> </td>

                                        <td><input type="time"  name ="FinViernes"   className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.FinViernes}/> </td>

                                        <td><input type="time"  name ="FinSabado"    className="form-control text-center" onChange={this.onInputChange} 
                                        value={this.state.FinSabado} /></td>
                                    </tr>
                                    <tr className="text-center">
                                        <td>Aulas</td>
                                        <td><select className="form-control text-center"  name="aulaLunes" value= {this.state.aulaLunes} onChange={this.onInputChange}>
                                                <option value="">Seleccione el aula</option>
                                                {this.state.classrooms.map(classroom=>
                                                    <option key={classroom._id}value={classroom._id}>{classroom.name}</option>
                                                )}
                                        </select></td>
                                        <td><select className="form-control text-center"  name="aulaMartes" value= {this.state.aulaMartes} onChange={this.onInputChange}>
                                                <option value="">Seleccione el aula</option>
                                                {this.state.classrooms.map(classroom=>
                                                    <option key={classroom._id}value={classroom._id}>{classroom.name}</option>
                                                )}
                                        </select></td>
                                        <td><select className="form-control text-center"  name="aulaMiercoles" value= {this.state.aulaMiercoles} onChange={this.onInputChange}>
                                                <option value="">Seleccione el aula</option>
                                                {this.state.classrooms.map(classroom=>
                                                    <option key={classroom._id} value={classroom._id}>{classroom.name}</option>
                                                )}
                                        </select></td>

                                        <td><select className="form-control text-center"  name="aulaJueves" value= {this.state.aulaJueves} onChange={this.onInputChange}>
                                                <option value="">Seleccione el aula</option>
                                                {this.state.classrooms.map(classroom=>
                                                    <option key={classroom._id} value={classroom._id}>{classroom.name}</option>
                                                )}
                                        </select></td>

                                        <td><select className="form-control text-center"  name="aulaViernes" value= {this.state.aulaViernes} onChange={this.onInputChange}>
                                                <option value="">Seleccione el aula</option>
                                                {this.state.classrooms.map(classroom=>
                                                    <option key={classroom._id} value={classroom._id}>{classroom.name}</option>
                                                )}
                                        </select></td>


                                        <td><select className="form-control text-center"  name="aulaSabado" value= {this.state.aulaSabado} onChange={this.onInputChange}>
                                                <option value="">Seleccione el aula</option>
                                                {this.state.classrooms.map(classroom=>
                                                    <option key={classroom._id} value={classroom._id}>{classroom.name}</option>
                                                )}
                                        </select></td>


                                    
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button type="submit" className="btn btn-success float-right"> Guardar Cambios</button>    
                    </form>
                </div>

            </div>
            
        </div>
        
    </div>

</Fragment>
)

    }

}

// state = { 
//     classrooms:[],
//     lenguages:[],
//     periods:[],
//     name: '',
//     classroom:[{
//         aulaViernes:'',
//         aulaMartes:'',
//         aulaMiercoles:'',
//         aulaJueves:'',
//         aulaLunes:''
//     }],
//     Lenguage:'',
//     size:'',
//     level: '',
//     Period:'',
//     schedule:[{
//         day:'',
//         HourStart:[{
//             InicioLunes:'',
//             InicioMartes:'',
//             InicioMiercoles:'',
//             InicioJueves:'',
//             InicioViernes:'',
//             InicioSabado:''
//         }],
//         HourFinish:[{
//             FinLunes:'',
//             FinMartes:'',
//             FinMiercoles:'',
//             FinJueves:'',
//             FinViernes:'',
//             FinSabado:''
//         }],
//     }]
// }



        // aulaViernes:'',
        // aulaMartes:'',
        // aulaMiercoles:'',
        // aulaJueves:'',
        // aulaLunes:'',
        // InicioLunes:'',
        // InicioMartes:'',
        // InicioMiercoles:'',
        // InicioJueves:'',
        // InicioViernes:'',
        // InicioSabado:'',
        // FinLunes:'',
        // FinMartes:'',
        // FinMiercoles:'',
        // FinJueves:'',
        // FinViernes:'',
        // FinSabado:''


        // InicioLunes:this.state.InicioLunes,
           
            // FinLunes:this.state.FinLunes,
            // FinMartes:this.state.FinMartes,
            // FinMiercoles:this.state.FinMiercoles,
            // FinJueves:this.state.FinJueves,
            // FinViernes:this.state.FinViernes,
            // FinSabado:this.state.FinSabado,
            // aulaViernes:this.state.aulaViernes,
            // aulaLMartes:this.state.aulaMartes,
            // aulaMiercoles:this.state.aulaMiercoles,
            // aulaJueves:this.state.InicioJueves,
            // aulaLunes:this.state.aulaLunes,