import React, { useState } from 'react';

function numeroALetras(n) {
  if (n === 0) return 'cero';
  if (n === 1000) return 'mil';
  const unidades = ['','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve'];
  const especiales = {10:'diez',11:'once',12:'doce',13:'trece',14:'catorce',15:'quince'};
  const decenas = ['','diez','veinte','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
  const centenas = ['','ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];

  if (n === 100) return 'cien';
  if (n <= 9) return unidades[n];
  if (n >= 10 && n <= 15) return especiales[n];
  if (n < 20) return 'dieci' + unidades[n-10];
  if (n === 20) return 'veinte';
  if (n < 30) return 'veinti' + unidades[n-20];
  if (n < 100) {
    const d = Math.floor(n/10);
    const u = n%10;
    return decenas[d] + (u ? ' y ' + unidades[u] : '');
  }
  if (n < 1000) {
    const c = Math.floor(n/100);
    const resto = n%100;
    const cenText = c === 1 ? 'ciento' : (centenas[c] || '');
    return cenText + (resto ? ' ' + numeroALetras(resto) : '');
  }
  return String(n);
}

export default function Traductor() {
  const [num, setNum] = useState('');
  const [texto, setTexto] = useState('');

  const convertir = () => {
    const n = parseInt(num,10);
    if (isNaN(n) || n < 1 || n > 1000) {
      setTexto('Ingrese un número entre 1 y 1000');
      return;
    }
    setTexto(numeroALetras(n));
  };

  return (
    <section>
      <h2>Traductor de Número a Letras (1-1000)</h2>
      <div style={{display:'flex',gap:8,alignItems:'center',marginTop:12}}>
        <input type="number" value={num} onChange={e=>setNum(e.target.value)} placeholder="1 - 1000" />
        <button onClick={convertir}>Traducir</button>
      </div>
      {texto && <p style={{marginTop:12}}><strong>{texto}</strong></p>}
    </section>
  );
}
