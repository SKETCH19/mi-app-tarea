import React, { useState } from 'react';

export default function Sumadora() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [res, setRes] = useState(null);

  const calcular = () => {
    const na = parseFloat(a) || 0;
    const nb = parseFloat(b) || 0;
    setRes(na + nb);
  };

  return (
    <section>
      <h2>Sumadora</h2>
      <div style={{display:'flex',gap:8,alignItems:'center',marginTop:12,flexWrap:'wrap'}}>
        <input type="number" value={a} onChange={e=>setA(e.target.value)} placeholder="Número A" />
        <input type="number" value={b} onChange={e=>setB(e.target.value)} placeholder="Número B" />
        <button onClick={calcular}>Sumar</button>
      </div>
      {res !== null && <p style={{marginTop:12}}>Resultado: <strong>{res}</strong></p>}
    </section>
  );
}
