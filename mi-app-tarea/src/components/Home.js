import React from 'react';

export default function Home() {
  return (
    <section>
      <h2>Adrian Alexander Reyes</h2>
      <div style={{display:'flex',gap:16,alignItems:'center',marginTop:12}}>
        <img src="/FOTO.jpg" alt="Adrian Reyes" style={{width:120,height:120,objectFit:'cover',borderRadius:6,boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}/>
        <div style={{lineHeight:1.6}}>
          <div><strong>Nombre:</strong> Adrian Alexander Reyes</div>
          <div><strong>Matrícula:</strong> 20231100</div>
          <div><strong>Correo:</strong> <a href="mailto:20231100@itla.edu.do">20231100@itla.edu.do</a></div>
        </div>
      </div>
    </section>
  );
}
