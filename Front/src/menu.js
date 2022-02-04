import React, {Component} from 'react';

import MovieForm from './MovieForm';
import MovieTarget from './MovieTarget';
import MovieList from './MovieList';
import ImageForm from './ImageForm';
import './menu.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";


export default class Menu extends Component {

    state = {
        seleccionado :"Home"
    }
    render(){
        
        return <div className = "container">
                <Router >
                    <nav>
                        <NavLink className="item" activeClassName="selected" to ="/Peliculas">Peliculas</NavLink>
                        <NavLink className="item" activeClassName="selected" to ="/CrearPelicula">Agregar Pelicula</NavLink>
                        <NavLink className="item" activeClassName="selected" to ="/Imagenes">Modificar Pelicula</NavLink>
                    </nav>
                    <Routes>
                        <Route exact path="/Peliculas" element ={<MovieList edit={false}/>} >
                        </Route>

                        <Route exact path="/" element ={<MovieList/>} >
                        </Route>
                        
                        <Route path="/Imagenes" element={<MovieList edit={true}/>}> 
                        </Route>

                        <Route path="/CrearPelicula" element = {<MovieForm />}>
                        </Route>
                    </Routes>
                </Router>
        </div>
    }
}
