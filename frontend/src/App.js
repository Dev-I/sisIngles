import React, {Fragment} from 'react'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//Components
import Navbar from './components/Navbar'
import Students from './components/Students'
import EditStudent from './components/EditStudent'
import NewStudent from './components/RegisterStuden/NewStudent'
import plantilla from './components/plantilla'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

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

                    <Navbar/>
                    <div className="wrapper">
                        <Sidebar/>
                        <div className="main-panel">
                            <Navbar/>
                            <div className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Switch>
                                                <Route exact path="/" component={Students}/>
                                                <Route exact path="/student/edit/:id" component={EditStudent}/>
                                                <Route exact path="/student/new" component={NewStudent}/>
                                                <Route exact path="/prueba" component={plantilla}/>
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
