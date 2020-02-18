import React, {Fragment} from 'react'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//Components
//import Navbar from './components/Navbar'

import Index from './components/Index'
import Students from './components/Student/Students'
import EditStudent from './components/Student/UpdateStudent/EditStudent'
import NewStudent from './components/Student/RegisterStuden/NewStudent'
import SearchStudent from './components/Student/SearchStudent/SerchStudents'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import FormGroupRegister from './components/Group/FormRegisterGroup'
import Classroom from './components/Classroom/Classroom'
import ClassroomRegister from './components/Classroom/FormRegisterClassroom'
import FormLenguage from './components/Lenguages/FormLenguages'
import FormSchoolPeriods from './components/SchoolPeriods/FormSchoolPeriods';

const client = new ApolloClient({
    uri: 'https://api-iti.herokuapp.com/graphql',
    onError: ({networkError, graphQLErrors}) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
    }
})
function App() {
    return (
        <ApolloProvider client={client}>
            
            <Router>
                <Fragment>
                    <div className="wrapper">
                        <Sidebar/>
                        <div className="main-panel">
                            
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row"> 
                                        <div className="col-md-12">
                                            
                                            <Switch>
                                                <Route exact path="/index" component={Index}/>
                                  {/* ------------------------- Rutas del Estudiante ------------------------- */}
                                                <Route exact path="/student" component={Students}/>
                                                <Route exact path="/student/edit/:id" component={EditStudent}/>
                                                <Route exact path="/student/new" component={NewStudent}/>
                                                <Route exact path="/student/buscar" component={SearchStudent}/>

                                  {/* ------------------------- Rutas de los salones------------------------- */}
                                                <Route exact path="/student/buscar" component={SearchStudent}/>

                                  {/* ------------------------- Rutas de los salones------------------------- */}
                                                <Route exact path="/classroom" component={Classroom} />
                                                <Route exact path="/classroom/new" component={ClassroomRegister}/>
                                                <Route exact path="/classroom/edit/:id" component={ClassroomRegister}/>

                                  {/* ------------------------- Rutas de los grupos ------------------------- */}
                                                <Route exact path="/group/new" component= {FormGroupRegister}/>
                                   
                                  {/* --------------------- Rutas de las especialidades o idomas --------------------- */}
                                                <Route exact path="/lenguage/new" component={FormLenguage}/>
                                   
                                  {/* ------------------------- Rutas de los periodos ------------------------- */}
                                                <Route exact path="/periods/new" component={FormSchoolPeriods}/>
                                               
                                            </Switch>
                                            <Footer/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Fragment>
            </Router>
        </ApolloProvider>
    )
}

export default App
