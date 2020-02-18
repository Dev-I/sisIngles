import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="sidebar" data-color="purple" data-background-color="black">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
                            sis
                        </a>
                        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                            Sistema de Ingles
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <div className="user">
                            <div className="photo">
                                <img alt="" src="../assets/img/faces/avatar.jpg"/>
                            </div>
                            <div className="user-info">
                                <a data-toggle="collapse" href="#collapseExample" className="username">
                                  <span>
                                    Tania Andrew
                                    <b className="caret"/>
                                  </span>
                                </a>
                                <div className="collapse" id="collapseExample">
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link"
                                               href="https://stackoverflow.com/questions/33127130/react-unterminated-jsx-contents">
                                                <span className="sidebar-mini"> MP </span>
                                                <span className="sidebar-normal"> My Profile </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <ul className="nav">
                            <li className="nav-item active">
                                <Link to={'/index'} className="nav-link" >
                                    <i className="material-icons">dashboard</i>
                                    <p> Inicio </p>
                                </Link>

                            </li>
                            <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#pagesPeriods">
                                    <i className="material-icons">image</i>
                                    <p> Periodos
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesPeriods">
                                    <ul className="nav">
                                    {/* <li className="nav-item">
                                        <Link to={'/periods'} className="nav-link">
                                         <span className="sidebar-mini"> T </span>
                                         <span className="sidebar-normal"> Todas las Idiomas </span>
                                        </Link>    
                                    </li> */}

                                        <li className="nav-item">
                                            <Link to={'/periods/new'} className="nav-link" >
                                            <span className="sidebar-mini"> NP </span>
                                                <span className="sidebar-normal"> Nuevo Periodo </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#pagesStudents">
                                    <i className="material-icons">image</i>
                                    <p> Estudiantes
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesStudents">
                                    <ul className="nav">

                                    <li className="nav-item">
                                        <Link to={'/student'} className="nav-link">
                                         <span className="sidebar-mini"> TE </span>
                                         <span className="sidebar-normal"> Todos los estudiantes </span>
                                        </Link>    
                                    </li>

                                        <li className="nav-item">
                                            <Link to={'/student/new'} className="nav-link" >
                                            <span className="sidebar-mini"> NE </span>
                                                <span className="sidebar-normal"> Nuevo Estudiante </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/student/buscar'} className="nav-link" >
                                            <span className="sidebar-mini"> TD </span>
                                                <span className="sidebar-normal"> Buscar Estudiante </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#pagesLenguages">
                                    <i className="material-icons">image</i>
                                    <p> Idiomas
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesLenguages">
                                    <ul className="nav">
                                    <li className="nav-item">
                                        <Link to={'/lenguage'} className="nav-link">
                                         <span className="sidebar-mini"> TI </span>
                                         <span className="sidebar-normal"> Todas las Idiomas </span>
                                        </Link>    
                                    </li>

                                        <li className="nav-item">
                                            <Link to={'/lenguage/new'} className="nav-link" >
                                            <span className="sidebar-mini"> ND </span>
                                                <span className="sidebar-normal"> Nuevo Idioma </span>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link to={'/teacher/search'} className="nav-link" >
                                            <span className="sidebar-mini"> TD </span>
                                                <span className="sidebar-normal"> Buscar Docente </span>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#pagesClassroom">
                                    <i className="material-icons">image</i>
                                    <p> Aulas
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesClassroom">
                                    <ul className="nav">
                                    <li className="nav-item">
                                        <Link to={'/classroom'} className="nav-link">
                                         <span className="sidebar-mini"> TA </span>
                                         <span className="sidebar-normal"> Todos las Aulas </span>
                                        </Link>    
                                    </li>

                                        <li className="nav-item">
                                            <Link to={'/classroom/new'} className="nav-link" >
                                            <span className="sidebar-mini"> NA </span>
                                                <span className="sidebar-normal"> Nuevo Aula </span>
                                            </Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link to={'/classroom/update'} className="nav-link" >
                                            <span className="sidebar-mini"> TA </span>
                                                <span className="sidebar-normal"> Actualizar Aula</span>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#pagesGroup">
                                    <i className="material-icons">image</i>
                                    <p> Grupos
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesGroup">
                                    <ul className="nav">
                                    <li className="nav-item">
                                        <Link to={'/group'} className="nav-link">
                                         <span className="sidebar-mini"> TG </span>
                                         <span className="sidebar-normal"> Todos los Grupos </span>
                                        </Link>    
                                    </li>

                                        <li className="nav-item">
                                            <Link to={'/group/new'} className="nav-link" >
                                            <span className="sidebar-mini"> NE </span>
                                                <span className="sidebar-normal"> Nuevo Grupo </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/group/new'} className="nav-link" >
                                            <span className="sidebar-mini"> TD </span>
                                                <span className="sidebar-normal"> Actualizar Grupo</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Sidebar