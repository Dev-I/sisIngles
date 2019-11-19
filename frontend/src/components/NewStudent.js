import React, {Component, Fragment} from 'react'
import {ADDSTUDENT} from '../mutations/index'
import {Mutation} from 'react-apollo'

class NewStudent extends Component {
    state = {
        student: {
            nombres: '',
            apellido_paterno: '',
            apellido_materno: '',
            numero_control: '',
            telefono: '',
            carrera: '',
            correo_electronico: '',
            estilo_aprendizaje: ''
        },
        error: false
    }

    render() {
        const {error} = this.state
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center">
            Todos los campos son obligatorios</p> : ''
        return (
            <Fragment>
                <h2 className="text-center">Nuevo Estudiante</h2>
                {respuesta}
                <div className="row justify-content-center">
                    <Mutation
                        mutation={ADDSTUDENT}
                        onCompleted={() => this.props.history.push('/')}
                    >
                        {addStudent => (
                            <form className="col-xl-10 m-3"
                                  onSubmit={e => {
                                      e.preventDefault()
                                      const {nombres, apellido_paterno, apellido_materno, numero_control, telefono, carrera, correo_electronico, estilo_aprendizaje} = this.state.student

                                      if (nombres === '' || apellido_paterno === '' || apellido_materno === ''
                                          || numero_control === '' || telefono === '' || carrera === '' ||
                                          estilo_aprendizaje === '') {
                                          this.setState({
                                              error: true
                                          })
                                          return
                                      }
                                      this.setState({
                                          error: false
                                      })

                                      const input = {
                                          nombres,
                                          apellido_paterno,
                                          apellido_materno,
                                          numero_control,
                                          telefono: Number(telefono),
                                          carrera,
                                          correo_electronico,
                                          estilo_aprendizaje
                                      }
                                      addStudent({
                                          variables: {input}
                                      })
                                  }}
                            >
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>Nombres</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre(s)"
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        nombres: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Apellido Paterno</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apellido Paterno"
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        apellido_paterno: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Apellido Materno</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Apellido Materno"
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        apellido_materno: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>Número de control</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Número de control"
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        numero_control: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Teléfono</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Teléfono"
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        telefono: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Carrera</label>
                                        <select
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        carrera: e.target.value
                                                    }
                                                })
                                            }}
                                            className="form-control">
                                            <option value="">Elegir...</option>
                                            <option value="Contador">Contador Publico</option>
                                            <option value="Civil">Ingenieria Civil</option>
                                            <option value="Electrica">Ingenieria Electrica</option>
                                            <option value="Electromecanica">Ingenieria Electromecanica</option>
                                            <option value="Gestion">Ingenieria en Gestion Empresarial</option>
                                            <option value="Sistemas">Ingenieria en Sistemas Computacionales</option>
                                            <option value="Industrial">Ingenieria Industrial</option>
                                            <option value="Informatica">Ingenieria Informatica</option>
                                            <option value="Mecanica">Ingenieria Mecanica</option>
                                            <option value="Mecatronica">Ingenieria Mecatronica</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Correo Electronico</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        correo_electronico: e.target.value
                                                    }
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Estilo de aprendizaje</label>
                                        <select
                                            onChange={e => {
                                                this.setState({
                                                    student: {
                                                        ...this.state.student,
                                                        estilo_aprendizaje: e.target.value
                                                    }
                                                })
                                            }}
                                            className="form-control">
                                            <option value="">Elegir...</option>
                                            <option value="VISUAL">VISUAL</option>
                                            <option value="AUDITIVO">AUDITIVO</option>
                                            <option value="KINESTESICO">KINESTÉSICO</option>
                                            <option value="LECTURA_ESCRITURA">LECTURA-ESCRITURA</option>
                                            <option value="MULTIMODAL">MULTIMODAL</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger float-right">Añadir cliente</button>
                            </form>
                        )}
                    </Mutation>
                </div>
            </Fragment>
        )
    }
}

export default NewStudent