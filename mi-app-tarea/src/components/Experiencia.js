import React, { useRef } from 'react';

export default function Experiencia() {
  const videoRef = useRef(null);

  const play = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section>
      <h2>Experiencia Personal</h2>
      <p style={{marginTop:8}}>Mi experiencia realizando esta tarea.</p>
      <div style={{marginTop:12}}>
        <video
          ref={videoRef}
          width="100%"
          style={{borderRadius:8,boxShadow:'0 2px 8px rgba(0,0,0,0.1)',maxWidth:'600px'}}
          controls
        >
          <source src="/VIDEO.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div style={{marginTop:12,display:'flex',gap:8}}>
          <button onClick={play}>▶ Play</button>
          <button onClick={pause}>⏸ Pausa</button>
        </div>
      </div>
    </section>
  );
}
