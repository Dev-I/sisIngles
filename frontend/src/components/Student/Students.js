import React, { Component,Fragment } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'



export default class Estudiantes extends Component {

    state = {
        students: []
    }

    async componentDidMount(){
        this.getStudents();
    }

    getStudents = async()=>{
        const res = await Axios.get('http://localhost:4000/backend/students')
        this.setState({students: res.data.students})
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
                        <table className="table" >
                            <thead className="text-center">
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido Paterno</th>
                                    <th>Apellido Materno</th>
                                    <th>Num. Control</th>
                                    <th>Carrera</th>
                                </tr>
                            </thead>
    
                            {this.state.students.map(student => (
                            <tbody key={student.id}>
                                <tr className="text-center">
                                    <td>{student.nombres}</td>
                                    <td>{student.apellido_paterno}</td>
                                    <td>{student.apellido_materno}</td>
                                    <td>{student.numero_control}</td>
                                    <td>{student.carrera}</td>
                                    <td><Link to={`/student/edit/${student.id}`}
                                    className="btn btn-success d-block d-md-inline-block">Agregar estudiante</Link></td>
                                
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