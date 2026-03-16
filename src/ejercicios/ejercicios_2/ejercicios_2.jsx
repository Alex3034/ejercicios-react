import React, { useState } from 'react';

function Ejercicio2() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ejercicio 2: Contador de Clics</h1>
      <p style={{ fontSize: '24px' }}>Clics: {clicks}</p>
      <button onClick={handleClick}>Contar clics</button>
    </div>
  );
}

export default Ejercicio2;
