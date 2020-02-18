import React, { Component, Fragment} from 'react'
import Axios from 'axios'


export default class SearchStudent extends Component {
    
  state = {
      student: [],
      numero_control : ""
      

  }
    onChangeNumeroControl = (e)=>{
        this.setState({ numero_control: e.target.value})
    }

    onSubmit = async (e) =>{
        e.preventDefault();
        const res = await Axios.get('http://localhost:4000/backend/students/'+ this.state.numero_control)
        this.setState({student: res.data})
        console.log(this.state.student.student)
    }
    


    render() {
    return( <Fragment>  
                 <div className="content-fluid">
                 <h2 className="text-center">Busqueda y Registro de estudiantes </h2>
                 </div> 
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-header card-header-info">
                                <h4 className="card-title">Busqueda de Studiantes</h4>
                                <p className="card-category">Introduce el Num. de control del estudiante a registrar</p>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <form className="col-xl-10 m-3" onSubmit={this.onSubmit} >
                                    <div className=" form-group col-md-4">
                                            <label className="bmd-label-floating">Número de control</label>
                                            <input type="text"  className="form-control"  onChange={this.onChangeNumeroControl} 
                                            value={this.state.numero_control}/>         
                                    </div>
                                    <button type="submit" className="btn btn-danger float-right">Buscar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
               <div className="content-fluid">
                <div className= "content">
                    <div className="content-fluid">
                          <div className="card">
                                <div className="card-header card-header-info">
                                    <h4 className="card-title">Registro de Estudiatnes</h4>
                                    <p className="card-category">Completa el formuralario</p>
                                </div>
                        
                            <div className= "card-body">
                                    <div className="row justify-content-center ">
                                    
                                        <form className="col-xl-10 m-3" >
                                            <div className="form-row">
                                                <div className="form-group col-md-4">
                                                    <label className="bmd-label-floating">Nombres</label>
                                                    <input type="text"  className="form-control" />
                                                </div>
                                                <div className=" form-group col-md-4">
                                                    <label className="bmd-label-floating">Apellido Paterno</label>
                                                    <input type="text"  className="form-control"/>
                                                </div>
                                                <div className=" form-group col-md-4">
                                                    <label className="bmd-label-floating">Apellido Materno</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className=" form-group col-md-4">
                                                    <label className="bmd-label-floating">Número de control</label>
                                                    <input type="text"  className="form-control"/>
                                                </div>
                                                <div className=" form-group col-md-4">
                                                    <label className="bmd-label-floating">Teléfono</label>
                                                    <input type="number" className="form-control"/>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label className="bmd-label-floating"> Carrera </label>
                                                    <input type="number" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className=" form-group col-md-6">
                                                    <label className="bmd-label-floating">Correo Electronico</label>
                                                    <input type="email" className="form-control"/>
                                                </div>
                                                
                                            </div>
                                            <button type="submit" className="btn btn-danger float-right"> Guardar Cambios</button>
                                        </form>
                                    </div>
                             
                            </div>
                          
                          </div>
                  </div>
            
             </div>
    
              </div>
       </Fragment>
        )
    }


}

