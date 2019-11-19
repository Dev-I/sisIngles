import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <div className="sidebar" data-color="danger" data-background-color="white"
                     data-image="../assets/img/sidebar-1.jpg">
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
                            <li className="nav-item active ">
                                <Link to={'/'} className="nav-link" >
                                    <i className="material-icons">dashboard</i>
                                    <p> Inicio </p>
                                </Link>

                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" data-toggle="collapse" href="#pagesExamples">
                                    <i className="material-icons">image</i>
                                    <p> Pages
                                        <b className="caret"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pagesExamples">
                                    <ul className="nav">
                                        <li className="nav-item ">
                                            
                                            <Link to={'/student/new'} className="nav-link" >
                                            <span className="sidebar-mini"> N </span>
                                                <span className="sidebar-normal"> Nuevo estudiante </span>
                                            </Link>

                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href="../examples/pages/rtl.html">
                                                <span className="sidebar-mini"> T </span>
                                                <span className="sidebar-normal"> Todos los estudiantes </span>
                                            </a>
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