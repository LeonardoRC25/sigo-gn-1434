import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Dashboard() {
  const navigate = useNavigate();
  
  // Recupera los datos guardados en localStorage
  const usuarioGuardado = JSON.parse(localStorage.getItem('sigoUsuario')) || { nombre: 'Usuario' };

  const handleCerrarSesion = () => {
    localStorage.removeItem('sigoUsuario');
    navigate('/');
  };

  return (
    <Layout>
      <div style={{ background: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '500px', width: '100%' }}>
        <h2 style={{ color: '#1e293b', marginBottom: '1rem' }}>Panel General de Operaciones</h2>
        <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '2rem' }}>
          Bienvenido, <strong>{usuarioGuardado.nombre}</strong>
        </p>
        <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '2rem' }}>
          Módulo de control de entrada y salida activo correctamente.
        </p>
        <button 
          onClick={handleCerrarSesion}
          style={{ backgroundColor: '#ef4444', color: '#fff', padding: '0.75rem 1.5rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Cerrar sesión
        </button>
      </div>
    </Layout>
  );
}