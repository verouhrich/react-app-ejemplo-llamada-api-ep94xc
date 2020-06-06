import React, { Component } from 'react';
import { render } from 'react-dom';

import Ciudad from './components/Ciudad/'
import './style.css';

class App extends Component {
  constructor() {
    super();

    // la data del usuario (ID)
    this.state = {
      ciudades: []
    };
  }

  render() {
    return (
      <div>
        <h2>LISTADO de Ciudades ({this.state.ciudades.length})</h2>
        <ul>
        {
          this.state.ciudades.map((ciudad) => {
            return (
              <Ciudad ciudad={ciudad} />
            )
          })
        }
        </ul>
        
      </div>
    );
  }
  // 

  componentDidMount(){
    console.log("Se llama luego del render");
    fetch('https://peaceful-dawn-72702.herokuapp.com/api/ciudades')
    .then(() => {
            console.log(response)
            response => response.json()
          })
    .then(
      data => {
        console.log(response)
          // Actualizo state de vehiculo
          this.setState({
            ciudades: data
          })
          
      }
    )
    
  }

}

render(<App />, document.getElementById('root'));
