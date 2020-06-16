import React, { Component } from 'react';
import './App.css';


import aguja from './img/aguja.png'
import agujaMinutos from './img/agujaMinutos.png'
import agujaSegundos from './img/agujaSegundos.png'


class Reloj extends Component{

  constructor(){
    super()
    this.state={
      segundos:0,
      minutos:0,
      hora:0,
      porcentajeHoras:0,
      porcentajeMinutos:0,
      porcentajeSegundos:0,
      ht:0
    }

    setInterval(() => {
      //crea un objeto que trae la hora y fecha
      const dt = new Date();
      console.log(this.state)
      if( this.state.hora>=12){
        this.setState({ht: this.state.hora/12*360}
      )}
      else{
        this.setState({ht: this.state.hora/24*360})
      }

      if(this.state.segundos===0){
        this.setState({segundos: this.state.segundos})
      }

      this.setState(
        {
          segundos:dt.getSeconds(),
          minutos:dt.getMinutes(),
          hora:dt.getHours(),
          porcentajeHoras:this.state.ht+this.state.minutos/60*30,
          porcentajeMinutos: this.state.minutos/60*360,
          porcentajeSegundos:this.state.segundos/60*360,
        }
      )
    }, 1000);


  }
  render(){
    
    const stSegundos={
      transform: 'rotate('+this.state.porcentajeSegundos+'deg)'
    }
    const stMinutos={
      transform: 'rotate('+this.state.porcentajeMinutos+'deg)'
    }

    const stHora={
      transform: 'rotate('+this.state.porcentajeHoras+'deg)'
    }
    
    return (<div>
            <div className="flex">
              <div className="contenido">
                <div className="reloj">
                  <img style={stHora} src={aguja} alt="horas" id="horas"/>
                  <img style={stMinutos} src={agujaMinutos} alt="minutos" id="minutos"/>
                  <img style={stSegundos} src={agujaSegundos} alt="segundos" id="segundos"/>
                </div>
                <h4 id="h4-content">{this.state.hora}:{this.state.minutos}:{this.state.segundos}</h4>

              </div>
            </div>
          </div>
    )
    
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reloj/>
        </header>
    </div>
  );
}

export default App;
