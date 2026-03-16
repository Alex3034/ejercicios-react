import React, { useState } from 'react';

function Ejercicio3() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Ejercicio 3: Lista Dinámica</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe un elemento..."
          style={{
            padding: '8px',
            fontSize: '16px',
            marginRight: '10px',
            width: '70%',
          }}
        />
        <button onClick={addItem} style={{ padding: '8px 15px' }}>
          Agregar
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#333333',
              color: 'white',
              borderRadius: '5px',
            }}
          >
            <span>{item.text}</span>
            <button
              onClick={() => removeItem(item.id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ejercicio3;
