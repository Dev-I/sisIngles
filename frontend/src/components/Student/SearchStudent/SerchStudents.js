import React, { Component, Fragment} from 'react'
import Success from '../../Partials/success'
import Error from '../../Partials/error';
import Axios from 'axios'
export default class SearchStudent extends Component {
    
  state = {
      numero_de_controlSearch:'',
      nombres:'',
      apellido_paterno:'',
      apellido_materno:'',
      numero_control:'',
      telefono:'',
      carrera:'',
      correo_electronico:'',
      registration_number:'',
      SuccesShow:false,
      ErrorShow : false
  }

  
    
    onSubmit = async(e)=>{
            e.preventDefault()
            try {
                const newStudet ={
                    registration_number:this.state.numero_control
                }
                await Axios.post('http://localhost:4000/backend/students',newStudet)
                this.setState({
                    SuccesShow:true
                })
            } catch (error) {
                this.setState({
                    ErrorShow: true
                })
            }
           
          
    }

    getStudent = async () =>{
        const res = await Axios.get('http://localhost:4000/backend/students/api/'+ this.state.numero_de_controlSearch)
         this.setState({
            nombres:res.data.nombres,
            apellido_paterno: res.data.apellido_paterno,
            apellido_materno: res.data.apellido_materno,
            numero_control:res.data.numero_control,
            telefono:res.data.telefono,
            carrera:res.data.carrera,
            correo_electronico:res.data.correo_electronico
         })
    }

    //async componentDidMount(){
    //     //this.getStudent()
    //  }
    onInputChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
        })
        
    }


render() {
    let error = (this.state.ErrorShow) ? <Error/> : ''
    let succes = (this.state.SuccesShow) ? <Success/> : ''
return( 
   
    <Fragment>  
        {succes}
        {error}
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
                            <form className="col-xl-10 m-3" >
                                <div className=" form-group col-md-4">
                                    <label className="bmd-label-floating">Número de control</label>
                                    <input type="text"  name="numero_de_controlSearch" className="form-control"  onChange={this.onInputChange} 
                                    value={this.state.numero_de_controlSearch}/>         
                                </div>
                                <button type="button" onClick={this.getStudent} className="btn btn-danger float-right">Buscar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-fluid">
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-header card-header-info">
                            <h4 className="card-title">Registro de Estudiatnes</h4>
                            <p className="card-category">Completa el formuralario</p>
                        </div>
                        <div className= "card-body">
                            <div className="row justify-content-center">   
                                <form className="col-xl-10 m-3" onSubmit={this.onSubmit}>
                                    <div className="form-row">
                                            <div className="form-group col-md-4">
                                                <label className="">Nombre</label>
                                                <input type="text" className="form-control"  name="name" onChange={this.onInputChange} value={this.state.nombres}/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label >Apellido Paterno</label>
                                                <input type="text" name="apellido_paterno" className="form-control" value={this.state.apellido_paterno} onChange={this.onInputChange}/>
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className="">Apellido Materno</label>
                                                <input type="text" name="apellido_materno" className="form-control" value={this.state.apellido_materno}
                                                onChange={this.onInputChange} />
                                            </div>
                                            <div className="form-group col-md-3">
                                                <label className="">Número de control</label>
                                                <input type="text" name="numero_control" className="form-control" value={this.state.numero_control} onChange={this.onInputChange} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className="">Teléfono</label>
                                                <input type="number" name="telefono" className="form-control" value={this.state.telefono}  onChange={this.onInputChange} />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label className=""> Carrera </label>
                                                <input type="text" name="carrera"className="form-control" value={this.state.carrera} onChange={this.onInputChange} />
                                            </div>
                                            <div className=" form-group col-md-6">
                                                <label className="">Correo Electronico</label>
                                                <input type="email" name="correo_electronico" className="form-control" value={this.state.correo_electronico} onChange={this.onInputChange} />
                                            </div>
                                    </div>
                                    <button type="submit"  className="btn btn-danger float-right" > Guardar Cambios</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
    </Fragment>
    )
}


}