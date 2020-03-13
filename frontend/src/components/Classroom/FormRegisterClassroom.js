import React, {Component, Fragment} from 'react'
import Success from '../Partials/success'
import Error from '../Partials/error';
import Axios from 'axios'; 

export default class ClassroomRegister extends Component{
    state={
        name:'',
        location:'',
        size:'',
        description:'',
        status: false,
        editing: false,
        _id: '',
        SuccesShow:false,
        ErrorShow : false
    }
    componentDidMount = async()=>{
        console.log(this.props.match.params)
        if (this.props.match.params.id) {
            const res = await Axios.get('http://localhost:4000/backend/classrooms/' + this.props.match.params.id)
            console.log(res.data)
            this.setState({
                name: res.data.name,
                location: res.data.location,
                size: res.data.size ,
                description: res.data.description,
                status: res.data.status,
                editing: true,
                _id: this.props.match.params.id
            })
        }
    }

    
    onSubmit = async(e)=>{
        e.preventDefault();
        try {
            const newClasroom = {
                name: this.state.name,
                location: this.state.location,
                size: this.state.size,
                description:this.state.description,
                status:this.state.status
            } 
            if (this.state.editing) {
                await Axios.put('http://localhost:4000/backend/classrooms/' + this.state._id, newClasroom)
               
            }else{
               await Axios.post ('http://localhost:4000/backend/classrooms',newClasroom)
                this.setState({
                    SuccesShow: true
                })
            }
        } catch (error) {
            this.setState({
                ErrorShow: true
            })
        
        }
    }
    onInputChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
          status: !this.state.status
        })
    }
    
render(){
    let error = (this.state.ErrorShow) ? <Error/> : ''

    let succes = (this.state.SuccesShow) ? <Success/> : ''
    return(
        <Fragment>
           {succes}
           {error}

            <div className="text-center">
                <h2>Registro de aulas</h2>
            </div>
            <div className="content-fluid">
                <div className="card">
                    <div className="card-header card-header-info">
                        <h4 className="card-title"> Registro de Aulas</h4>
                        <p className="card-category">Complete el formulario para registrar una nueva aula</p>
                    </div>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <form className="col-xl-10 m-3" onSubmit={this.onSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label className="">Nombre del aula</label>
                                        <input type="text" className="form-control" placeholder="Nombre del Aula"  name="name" onChange={this.onInputChange} value={this.state.name}/>
                                    </div>
                                    <div className=" form-group col-md-4">
                                        <label className="">Ubicación </label>
                                        <input type="text" className="form-control" placeholder= "Ubicacion" name="location" value={this.state.location} onChange={this.onInputChange}/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label className="">Capacidad </label>
                                        <input type="text" className="form-control"  placeholder="Capacidad"  name="size" onChange={this.onInputChange} value={this.state.size}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label className="">Descripcion </label>
                                        <textarea type="text" className="form-control"  placeholder="Descripcion" name="description" rows="4" onChange= {this.onInputChange}
                                            value={this.state.description} />
                                    </div>
                                    <div className="form-check col-md-6">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="status" onChange={this.onInputChange} value={this.state.status ? false:true}/>
                                            Estado del aula(habilitada/deshabilitada, si el aula esta activa selecciona la casilla, en caso contrario dejar en blanco
                                            <span className="form-check-sign">
                                                <span className="check"></span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger float-right" >Guardar</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

};
