import React, {Component, Fragment} from 'react'

class navbar extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                aria-controls="navigation-index"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"/>
                            <span className="navbar-toggler-icon icon-bar"/>
                            <span className="navbar-toggler-icon icon-bar"/>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                            <form className="navbar-form">
                                <div className="input-group no-border">
                                    <input type="text" className="form-control" placeholder="Search..."/>
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container"/>
                                    </button>
                                </div>
                            </form>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#pablo">
                                        <i className="material-icons">dashboard</i>
                                        <p className="d-lg-none d-md-block">
                                            Stats
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="http://example.com" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">notifications</i>
                                        <span className="notification">5</span>
                                        <p className="d-lg-none d-md-block">
                                            Some Actions
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right"
                                         aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="https://stackoverflow.coms">Mike John
                                            responded to your email</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#pablo" id="navbarDropdownProfile"
                                       data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">person</i>
                                        <p className="d-lg-none d-md-block">
                                            Account
                                        </p>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right"
                                         aria-labelledby="navbarDropdownProfile">
                                        <a className="dropdown-item"
                                           href="https://stackoverflow.com/questions/33127130/react-unterminated-jsx-contents">Profile</a>
                                        <a className="dropdown-item"
                                           href="https://stackoverflow.com/questions/33127130/react-unterminated-jsx-contents">Settings</a>
                                        <div className="dropdown-divider"/>
                                        <a className="dropdown-item"
                                           href="https://stackoverflow.com/questions/33127130/react-unterminated-jsx-contents">Log
                                            out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default navbar