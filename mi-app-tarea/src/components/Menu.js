import React from 'react';

export default function Menu({ page, setPage }) {
  return (
    <nav className="nav" aria-label="Menú principal">
      <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Página Inicial</button>
      <button className={page === 'sumadora' ? 'active' : ''} onClick={() => setPage('sumadora')}>Sumadora</button>
      <button className={page === 'traductor' ? 'active' : ''} onClick={() => setPage('traductor')}>Traductor</button>
      <button className={page === 'tabla' ? 'active' : ''} onClick={() => setPage('tabla')}>Tabla de Multiplicar</button>
      <button className={page === 'experiencia' ? 'active' : ''} onClick={() => setPage('experiencia')}>Experiencia</button>
    </nav>
  );
}
