import React, {Component} from 'react'

class Success extends Component {
  

    render() {
        return (
            <div className="alert alert-danger text-center content col-lg-8 col-md-6 ml-auto mr-auto" role="alert">
               Error al guardar los datos
            </div>
        )
    }
}

export default Success