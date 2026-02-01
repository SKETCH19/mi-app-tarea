import React, { useState } from 'react';

export default function TablaMultiplicar() {
  const [n, setN] = useState('');
  const [tabla, setTabla] = useState([]);

  const generar = () => {
    const num = parseInt(n,10);
    if (isNaN(num)) return;
    const t = [];
    for (let i=1;i<=13;i++) t.push({i, val: num * i});
    setTabla(t);
  };

  return (
    <section>
      <h2>Tabla de Multiplicar (hasta 13)</h2>
      <div style={{display:'flex',gap:8,alignItems:'center',marginTop:12}}>
        <input type="number" value={n} onChange={e=>setN(e.target.value)} placeholder="Número" />
        <button onClick={generar}>Generar</button>
      </div>
      <ul style={{marginTop:12}}>
        {tabla.map(row => <li key={row.i}>{n} x {row.i} = {row.val}</li>)}
      </ul>
    </section>
  );
}
