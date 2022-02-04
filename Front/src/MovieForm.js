import axios from 'axios';
import React, { useState } from 'react';
import './MovieForm.css'

function MovieForm(props) {

    const [datos, setDatos] = useState({
        nombre: '',
        codigo: '',
        descripcion: '',
        created: false,
        cardData : {}
    })


    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const crearPelicula = (event) => {

        event.preventDefault();

        const data = new FormData()
        data.append("codigo", datos.codigo)
        data.append("nombre", datos.nombre)
        data.append("descripcion", datos.descripcion)

        axios(
            {
                method: "post",
                url: "http://31.220.17.20/productos/productos/",
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then((response) => {
            console.log(response);

            window.history.pushState({}, undefined, "/Peliculas");
            window.location.reload()

        }).catch((error) => {
            console.log(error);
            console.log(error.response);

            const _data = error.response.data;

            for (const key of data.keys()) {
                alert(_data[key] + key)
            }

        })

        setDatos({
            ...datos,
            nombre: '',
            codigo: '',
            descripcion: '',
            created: true,
            cardData: "response.data"
        })        

    }

    return <div>
    <form action='/Peliculas' onSubmit={crearPelicula}>
        <div className='input-container'>
            <input
                className="form-input"
                name="codigo"
                onChange={handleInputChange}
                placeholder='Codigo'
            ></input>
        </div>

        <div className='input-container'>
            <input
                className="form-input"
                name="nombre"
                onChange={handleInputChange}
                placeholder='Nombre de la pelicula'
            ></input>
        </div>

        <div className='input-container'>
            <textarea
                rows="10"
                className="form-input textarea"
                name="descripcion"
                onChange={handleInputChange}
                placeholder='Descripción'
            ></textarea>
        </div>

        <input type="submit" value="Crear Pelicula"></input>
    </form>

    {/* {created ? <h1>Pelicula creada</h1> : null} */}

    </div>

}

export default MovieForm;