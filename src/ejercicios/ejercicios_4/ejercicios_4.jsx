import React, { useMemo, useState } from 'react';

function Ejercicio4() {
  const [query, setQuery] = useState('');
  const items = useMemo(() => ['Perro', 'Gato', 'Pez', 'Loro', 'Caballo', 'Tortuga'], []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (normalized === '') return items;
    return items.filter((item) => item.toLowerCase().includes(normalized));
  }, [items, query]);

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h1>Ejercicio 4: Filtro de Búsqueda en Tiempo Real</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '15px',
          fontSize: '16px',
        }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filtered.length === 0 ? (
          <li>No se encontraron elementos.</li>
        ) : (
          filtered.map((item) => (
            <li
              key={item}
              style={{
                padding: '10px',
                borderBottom: '1px solid #ddd',
              }}
            >
              {item}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Ejercicio4;
