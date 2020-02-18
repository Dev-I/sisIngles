import React, {Fragment}from 'react';
import { useInputValue } from '../../../hooks/InputValue'

export const UpdateStudent = ({disabled, error,onSubmit, title,student}) => {
//estado inicial
const id = useInputValue(student.id);
const nombres = useInputValue(student.nombres);
const apellido_paterno = useInputValue(student.apellido_paterno);
const apellido_materno = useInputValue(student.apellido_materno);
const numero_control = useInputValue(student.numero_control);
const telefono = useInputValue(student.telefono); 
const carrera = useInputValue(student.carrera);
const correo_electronico = useInputValue(student.correo_electronico);
const estilo_aprendizaje  = useInputValue(student.estilo_aprendizaje);

//control
const handleSubmit = e =>{
    e.preventDefault();
    onSubmit(
        // e=>
        // this.setState({
        // ...this.state.student, //actualiza el dato en el hook en tiempo real
        {id: id.value,
        nombres: nombres.value,
        apellido_paterno: apellido_paterno.value,
        apellido_materno: apellido_materno.value,
        numero_control: numero_control.value,
        telefono: telefono.value,
        carrera: carrera.value,
        correo_electronico: correo_electronico.value,
        estilo_aprendizaje: estilo_aprendizaje.value}

    )

}
return <Fragment>  
    
    <h2 className="text-center">{title} </h2>
                <div className="row justify-content-center ">
                    <form className="col-xl-10 m-3" onSubmit={handleSubmit} disabled={disabled} >
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label className="bmd-label-floating">Nombres</label>
                                <input type="text"  className="form-control"  {...nombres} />
                            </div>
                            <div className=" form-group col-md-4">
                                <label className="bmd-label-floating">Apellido Paterno</label>
                                <input type="text"  className="form-control"{...apellido_paterno} />
                            </div>
                            <div className=" form-group col-md-4">
                                <label className="bmd-label-floating">Apellido Materno</label>
                                <input type="text" className="form-control"  {...apellido_materno}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className=" form-group col-md-4">
                                <label className="bmd-label-floating">Número de control</label>
                                <input type="text"  className="form-control"  {...numero_control} />
                            </div>
                            <div className=" form-group col-md-4">
                                <label className="bmd-label-floating">Teléfono</label>
                                <input type="number" className="form-control" {...telefono} />
                            </div>
                            <div className="form-group col-md-4">
                                <label className="bmd-label-floating"></label>
                                <select className="form-control" {...carrera} >
                                    <option value="">Elegir Carrera ...</option>
                                    <option value="CONTADOR">Contador Publico</option>
                                    <option value="CIVIL">Ingenieria Civil</option>
                                    <option value="ELECTRICA">Ingenieria Electrica</option>
                                    <option value="Electromecanica">Ingenieria Electromecanica</option>
                                    <option value="GESTION">Ingenieria en Gestion Empresarial</option>
                                    <option value="SISTEMAS">Ingenieria en Sistemas Computacionales</option>
                                    <option value="INDUSTRIAL">Ingenieria Industrial</option>
                                    <option value="INFORMTICA">Ingenieria Informatica</option>
                                    <option value="MECANICA">Ingenieria Mecanica</option>
                                    <option value="MECATRONICA">Ingenieria Mecatronica</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className=" form-group col-md-6">
                                <label className="bmd-label-floating">Correo Electronico</label>
                                <input type="email" className="form-control" {...correo_electronico} />
                            </div>
                            
                            <div className=" form-group col-md-6">
                                <label className="bmd-label-floating"></label>
                                <select className="form-control" {...estilo_aprendizaje} >
                                    <option value="">Estilo de aprendizaje ...</option>
                                    <option value="VISUAL">VISUAL</option>
                                    <option value="AUDITIVO">AUDITIVO</option>
                                    <option value="KINESTESICO">KINESTÉSICO</option>
                                    <option value="LECTURA_ESCRITURA">LECTURA-ESCRITURA</option>
                                    <option value="MULTIMODAL">MULTIMODAL</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger float-right"> Guardar Cambios</button>
                    </form>
                    {error && <span>{error}</span>}
                </div>

           </Fragment>


}