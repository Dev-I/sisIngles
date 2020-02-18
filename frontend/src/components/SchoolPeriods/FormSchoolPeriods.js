import React, {Component, Fragment} from 'react';
import Axios from 'axios';

export default class FormSchoolPeriod extends Component{

    //let year=(new Date).getFullYear()

    state={
        schollperiods:[],
        year: new Date().getFullYear(),
        period:'',
        start: new Date(),
        finish: new Date()
    }

    onInputChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
        })
        
    }

    onSubmit=async(e)=>{
        e.preventDefault();
        const NewPeriod = {
            year: this.state.year,
            period: this.state.period,
            start: this.state.start,
            finish: this.state.finish
    } 
        await Axios.post('http://localhost:4000/backend/periods',NewPeriod)
}


render(){
    return(

        <Fragment>
            <div className="container text-center">
                <h2>Registro de Periodos escolares</h2>
            </div>
            <div className="content col-lg-8 col-md-6 ml-auto mr-auto">
                <div className="content-fluid">
                    <div className="card">
                        <div className="card-header card-header-info">
                            <h4 className="card-title">Registro de nuevo Periodo</h4>
                            <p className="card-category">Complete el formulario para registrar un nuevo periodo </p>
                        </div>
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <form className="col-xl-10 m-3"  onSubmit={this.onSubmit}>

                                    <div className="form-row">
                                        <div className=" form-group col-md-5">
                                            <label className="">Año</label>
                                            <input type="number"  className="form-control" name="year"onChange={this.onInputChange} value={this.state.year}/>
                                        </div>
                                        
                                        <div className="form-group col-md-4">
                                            <label htmlFor="inputState" className="bmd-label-floating">Perido</label>
                                            <select id="inputState" name="period" className="form-control" onChange={this.onInputChange} value={this.state.period}>
                                                <option >Seleccione el periodo...</option>
                                                <option value="Enero/Junio">Enero/Junio</option>
                                                <option value="Verano">Verano</option>
                                                <option value="Agosto/Diciembre">Agosto/Diciembre</option>
                                            </select>
                                        </div>
                                        <div className=" form-group col-md-4">
                                            <label className="">Inicio</label>
                                            <input type="date" className="form-control" name="start" onChange={this.onInputChange} />
                                        </div>

                                        <div className=" form-group col-md-4">
                                            <label className="">final</label>
                                            <input type="date" className="form-control" name="finish" onChange={this.onInputChange} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-danger float-right">Guardar</button>
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