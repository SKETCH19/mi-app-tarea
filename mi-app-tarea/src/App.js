import React, { useState } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Sumadora from './components/Sumadora';
import Traductor from './components/Traductor';
import TablaMultiplicar from './components/TablaMultiplicar';
import Experiencia from './components/Experiencia';

export default function App() {
  const [page, setPage] = useState('home');
  return (
    <div className="app-container" role="application">
      <Menu page={page} setPage={setPage} />
      <main className="main-content" aria-live="polite">
        {page === 'home' && <Home />}
        {page === 'sumadora' && <Sumadora />}
        {page === 'traductor' && <Traductor />}
        {page === 'tabla' && <TablaMultiplicar />}
        {page === 'experiencia' && <Experiencia />}
      </main>
    </div>
  );
}