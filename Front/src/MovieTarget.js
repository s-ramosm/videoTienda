import axios from 'axios';
import React, { useState } from 'react';
import MovieImages from './MovieImages'
import "./MovieTarget.css"
import ImageForm from './ImageForm';

class MovieTarget extends React.Component {

    state = {
        imagenes : [],
        codigo : this.props.codigo
    }

    render(){
        return <div className= "target">
                <p className='cod'>{this.state.codigo}</p>
                <div className="info row">
                    <p className='nombre'>{this.props.nombre}</p>
                </div>
                
                <div className="info">
                    <p className='description'>{this.props.descripcion}</p>
                    <MovieImages codigo = {this.state.codigo} />
                </div>
                
                <div>
                    {this.props.edit ? <ImageForm codigo = {this.state.codigo}/> : null  
                    }
                </div>

            </div>
    }
    
}

export default MovieTarget;