import axios from 'axios';
import React, { useState } from 'react';
import './ImageForm.css';
import { useHistory } from "react-router-dom";

function ImageForm(props) {

    // const history = useHistory();

    function handleClick() {
        //history.push("/Imagenes");
        // history.go();
    }
    const [datos, setDatos] = useState({
        imagenes : []
    })

    const [value, setValue] = useState(0)

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }


    const handleInputChangeFile = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.files
        })
    }
    
    const enviarImagen = (event) => {

        event.preventDefault();

        const data = new FormData()
        data.append("producto", props.codigo)

        for (const imagen of datos.imagenes) {
            data.append("imagen", imagen)
        }

        axios(
            {
                method: "post",
                url: "http://31.220.17.20/productos/imagen/",
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then((response) => {
            console.log(response);
            window.history.pushState({}, undefined, "/Imagenes");
            window.location.reload();
        }).catch((error) => {
            console.log(error);
            console.log(error.response);
        })

    }


    return <form action='/Imagenes' className='image' onSubmit={enviarImagen}>
        
        <div className='input-container'>
            <input
                onChange={handleInputChangeFile}
                name = "imagenes"
                multiple
                type="file"
                className="from-input"
                placeholder='Nombre de la pelicula'
                accept="image/*"
            ></input>
        </div>


        <input type="submit" value="Actualizar"></input>
    </form>

}

export default ImageForm;