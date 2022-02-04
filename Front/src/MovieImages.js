import React from "react";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

class MovieImage extends React.Component{
    state = {
        imagenes :[]
    }

    componentDidMount() {


        axios(
            {
                method: "get",
                url: "http://31.220.17.20/productos/imagenes/"+this.props.codigo + "/" ,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then((response) => {
            const imagenes = response.data;
            this.setState({imagenes})
            console.log(this.state.peliculas);
        }).catch((error) => {
            console.log(error);
            console.log(error.response);
        })

        

    }

    render() {
        return <div>
            {this.state.imagenes.map((imagen,index) => (
                <img key={index} height="100px" src={"http://31.220.17.20/productos/imagen/" + imagen.id + "/"} />
            ))}
        </div>
    }
}

export default MovieImage;