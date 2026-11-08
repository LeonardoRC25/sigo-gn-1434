import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="sigo-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="sigo-header" style={{ backgroundColor: '#1e293b', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>SIGO-GN · Unidad 34</h1>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>Sistema Integral de Gestión Operativa</p>
      </header>
      <main className="sigo-content" style={{ flex: 1, padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' }}>
        {children}
      </main>
    </div>
  );
}