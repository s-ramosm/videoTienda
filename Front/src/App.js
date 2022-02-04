
import './App.css';
import axios from 'axios';  
import React from 'react';
import MovieForm from './MovieForm';
import MovieTarget from './MovieTarget';
import MovieList from './MovieList';
import ImageForm from './ImageForm';


class App extends React.Component {
  state = {
    peliculas: []
  }

  // componentDidMount() {
  //   axios.get(`http://31.220.17.20/productos/productos/`)
  //     .then(res => {
  //       console.log(res.data)
  //       // const persons = res.data;
  //       // this.setState({ persons });
  //     })
  // }
  
  render () {
    return (
      <div className="App">
        {/* 
         */}
         <MovieForm/>
         {/* <MovieList/> */}
        {/* <ImageForm codigo = "02"/> */}
      </div>
    );
  }
  
}


export default App;
