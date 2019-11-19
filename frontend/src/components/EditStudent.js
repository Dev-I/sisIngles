import React, {Component, Fragment} from 'react'
import {GETSTUDENT_QUERY} from '../queries'
import {Query} from 'react-apollo'

class EditStudent extends Component {
    state = {}

    render() {
        const {id} = this.props.match.params
        console.log(id)
        return (
            <Fragment>
                <h2 className="text-center">Editar estudiante</h2>
                <Query query={GETSTUDENT_QUERY} variables={{id}}>
                    {({loading, error, data}) => {
                        if (loading) return 'cargando'
                        if (error) return `error! ${error.message}`
                        console.log(data)
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default EditStudent