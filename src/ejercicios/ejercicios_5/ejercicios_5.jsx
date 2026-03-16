import React, { useState } from 'react';

function Ejercicio5() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const parseNumber = (value) => {
    const number = parseFloat(value);
    return Number.isNaN(number) ? null : number;
  };

  const calculate = (op) => {
    setError('');
    const numA = parseNumber(a);
    const numB = parseNumber(b);

    if (numA === null || numB === null) {
      setError('Introduce ambos números válidos.');
      setResult(null);
      return;
    }

    if (op === 'div' && numB === 0) {
      setError('No se puede dividir por cero.');
      setResult(null);
      return;
    }

    let res;
    switch (op) {
      case 'sum':
        res = numA + numB;
        break;
      case 'sub':
        res = numA - numB;
        break;
      case 'mul':
        res = numA * numB;
        break;
      case 'div':
        res = numA / numB;
        break;
      default:
        res = null;
    }

    setResult(res);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '480px' }}>
      <h1>Ejercicio 5: Calculadora Sencilla</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Número A"
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Número B"
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '15px' }}>
        <button onClick={() => calculate('sum')} style={{ padding: '10px' }}>
          Sumar
        </button>
        <button onClick={() => calculate('sub')} style={{ padding: '10px' }}>
          Restar
        </button>
        <button onClick={() => calculate('mul')} style={{ padding: '10px' }}>
          Multiplicar
        </button>
        <button onClick={() => calculate('div')} style={{ padding: '10px' }}>
          Dividir
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && (
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Resultado: {result}</p>
      )}
    </div>
  );
}

export default Ejercicio5;
