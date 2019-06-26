import React, { Component } from 'react'
import examService from '../../services/examService'

export class SecondExam extends Component {

    state = {
        dm: []
    }

    //Componente tipo clase
    componentDidMount() {
        this.setState({
            dm: examService.getExam()
        });
    }

    render() {
        const dm = this.state.dm;
        return (
            <React.Fragment>
                <h1>DrawMomo <small>Fantastic meems</small></h1>
                <hr></hr>
                <div className="card">
                    {/*Tarjeta de los héroes*/}

                    {dm.map(meme => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={meme.img} alt={meme.nombre} className="card-img-top img-fluid" />
                            <div className="card-body">
                            <a href=""><h4 className="card-title">{meme.nombre}</h4> </a>
                            <p className="card-text">{meme.bio}</p>
                            <p className="card-text">
                                <small className="text-muted">{meme.aparicion}</small>
                            </p>
                            <button type="button" className="btn btn-outline-primary btn-block">
                                Ver comentarios...
                            </button>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
            </React.Fragment>
        )
    }
}

export default SecondExam

