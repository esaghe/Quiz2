import React, { Component } from 'react'
import heroeService from '../../services/heroeService'

export class Heroes extends Component {

    state = {
        dm: []
    }

    //Componente tipo clase
    componentDidMount() {
        this.setState({
            dm: heroeService.getHeroes()
        });
    }

    render() {
        const dm = this.state.dm;
        return (
            <React.Fragment>
                <h1>Héroes <small>Marvel y DC</small></h1>
                <hr></hr>
                <div className="card">
                    {/*Tarjeta de los héroes*/}

                    {dm.map(meme => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={meme.img} alt={meme.nombre} className="card-img-top img-fluid" />
                            <div className="card-body">
                            <h4 className="card-title">{meme.nombre}</h4>
                            <p className="card-text">{meme.bio}}</p>
                            <p className="card-text">
                                <small className="text-muted">{meme.aparicion}}</small>
                            </p>
                            <button type="button" className="btn btn-outline-primary btn-block">
                                Ver más memes...
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

export default Heroes
