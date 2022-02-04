import axios from 'axios';
import React, { useState } from 'react';
import MovieTarget from './MovieTarget';
import './MovieList.css'

class MovieList extends React.Component {

    state = {
        peliculas: [],

    }

    componentDidMount() {

        axios(
            {
                method: "get",
                url: "http://31.220.17.20/productos/productos/",
            }
        ).then((response) => {
            const peliculas = response.data;
            this.setState({ peliculas })
            console.log(this.state.peliculas);
        }).catch((error) => {
            console.log(error);
            console.log(error.response);
        })



    }

    render() {
        return <div >
            <h1>Lista de peliculas</h1>

            <div className='lista_peliculas'>

                {this.state.peliculas.map((pelicula, index) => (
                    <MovieTarget
                        key={index}
                        nombre={pelicula.nombre}
                        codigo={pelicula.codigo}
                        descripcion={pelicula.descripcion}
                        edit = {this.props.edit}
                    />
                ))}

            </div>

        </div>
    }

}

export default MovieList;