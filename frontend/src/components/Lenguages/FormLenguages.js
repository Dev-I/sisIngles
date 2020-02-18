import React ,{Component, Fragment} from 'react'
import Axios from 'axios'

export default class FormLenguages extends Component{

    state={
        lenguages:[],
        key:'',
        lenguage:'',
        editing: false,
        _id: ''
        
    }

    componentDidMount = async()=>{
        console.log(this.props.match.params)
        if (this.props.match.params.id) {
            const res = await Axios.get('http://localhost:4000/backend/lenguages/' + this.props.match.params.id)
           // console.log(res.data)
            this.setState({
                key: res.data.key,
                lenguage: res.data.lenguage,
                editing: true,
                _id: this.props.match.params.id
            })
        }
    }

    onSubmit = async(e)=>{
        e.preventDefault();
        const newLenguage = {
            key: this.state.key,
            lenguage: this.state.lenguage,
        } 
        if (this.state.editing) {
            await Axios.put('http://localhost:4000/backend/lenguages/' + this.state._id, newLenguage)
            
        }else{
           const res = await Axios.post('http://localhost:4000/backend/lenguages',newLenguage)
           console.log(res.data)
        }
        
    }
    onInputChange = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
        })
        
    }

render(){
    return(
        <Fragment>
            <div className="text-center">
                <h1>Registro de un lenguage</h1>
            </div>
           
            <div className="content-fluid">
            <div className="card">
                <div className="card-header card-header-info">
                    <h4 className="card-title"> Formulario de Registro</h4>
                    <p className="card-catgory"> Completa el formulario para registrar en nuevo lenguaje</p>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                            <form className="col-xl-10 m-3" onSubmit={this.onSubmit}>
                                <div className="form-row">

                                <div className=" form-group col-md-4">
                                    <label className="bmd-label-floating">Clave del idioma</label>
                                    <input type="text"  className="form-control" name="key" onChange={this.onInputChange} value={this.state.key} />
                                </div>
                                <div className=" form-group col-md-4">
                                    <label className="bmd-label-floating">Idioma</label>
                                    <input type="text" className="form-control" name="lenguage" onChange={this.onInputChange} value={this.state.lenguage}/>
                                </div>
                                    
                                </div>
                                <button type="submit" className="btn btn-danger float-right">Guardar</button>
                            </form>

                        </div>
                    </div>

            </div>
            </div>

        </Fragment>

    )
}

}