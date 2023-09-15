import './App.css';
import logo from './imagenes/frontend.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const agregarValor = val => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    }else {
      alert("Ingresar valor correcto")
    }
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={logo}
        className='freecodecamp-logo'
        alt='Logo de pagina' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarValor}>1</Boton>
          <Boton manejarClic={agregarValor}>2</Boton>
          <Boton manejarClic={agregarValor}>3</Boton>
          <Boton manejarClic={agregarValor}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarValor}>4</Boton>
          <Boton manejarClic={agregarValor}>5</Boton>
          <Boton manejarClic={agregarValor}>6</Boton>
          <Boton manejarClic={agregarValor}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarValor}>7</Boton>
          <Boton manejarClic={agregarValor}>8</Boton>
          <Boton manejarClic={agregarValor}>9</Boton>
          <Boton manejarClic={agregarValor}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarValor}>0</Boton>
          <Boton manejarClic={agregarValor}>.</Boton>
          <Boton manejarClic={agregarValor}>/</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'>
          <BotonClear manejarClic={() => setInput('')}>Borrar</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
