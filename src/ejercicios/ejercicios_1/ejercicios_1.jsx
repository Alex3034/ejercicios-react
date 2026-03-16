import React, { useState } from 'react';

function Ejercicio1() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Color inicial blanco

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Ejercicio 1: Cambiador de Color de Fondo</h1>
      <button onClick={changeColor}>Cambiar color</button>
    </div>
  );
}

export default Ejercicio1;