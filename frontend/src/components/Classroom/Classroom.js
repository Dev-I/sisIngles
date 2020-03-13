import React, { Component,Fragment } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Classrooms extends Component {

    state = {
        classrooms: []
    }

    async componentDidMount(){
        this.getClassrooms();
    }

    getClassrooms = async()=>{
        const res = await Axios.get('http://localhost:4000/backend/classrooms')
        this.setState({classrooms: res.data})
        console.log(res.data)
        
    }

   
render() {
    return (
    <Fragment>
        <h2 className="h2 text-center mt-4"> Listado de Estudiantes</h2>
        <div className="content">
            <div className="content-fluid">
                <div className="card">
                    <div className="card-header card-header-info ">
                        <h4 className="card-title ">Estudiantes</h4>
                        <p className="card-category">Listado de los estudiates con sus datos generales</p>
                    </div>
                        <table className="table">
                            <thead className="text-center">
                                <tr>
                                    <th>Nombre del Aula</th>
                                    <th>Capacidad</th>
                                    <th>Estado del Aula</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
    
                            {this.state.classrooms.map(classroom => (
                            <tbody key={classroom._id}>
                                <tr className="text-center">
                                    <td>{classroom.name}</td>
                                    <td>{classroom.size}</td>
                                    <td>{classroom.status ? 'Habilitada': 'Deshabilitada'}</td>
                                    <td><Link to={`/classroom/edit/${classroom._id}`}
                                    className="btn btn-success d-block d-md-inline-block">Editar datos</Link></td>
                                
                                </tr>
                            </tbody>
                            )) }
                        </table>
                    
                </div>
            </div>
        </div>
    </Fragment>

        )
    }
}