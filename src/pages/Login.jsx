import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuariosPrueba } from '../data/usuarios';
import Layout from '../components/Layout';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Busca si el usuario y contraseña coinciden en nuestro arreglo
    const encontrado = usuariosPrueba.find(
      (u) => u.usuario === usuario && u.contraseña === contrasena
    );

    if (encontrado) {
      // Guarda los datos del usuario (sin contraseña) en localStorage
      const datosSesion = {
        nombre: encontrado.nombre,
        usuario: encontrado.usuario,
        rol: encontrado.rol
      };
      localStorage.setItem('sigoUsuario', JSON.stringify(datosSesion));
      // Redirige al dashboard simulando el control de acceso
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas. Verifique usuario y contraseña.');
    }
  };

  return (
    <Layout>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#1e293b' }}>Control de Acceso E/S</h2>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Usuario:</label>
            <input 
              type="text" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)} 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
              placeholder="Ej. leo"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Contraseña:</label>
            <input 
              type="password" 
              value={contrasena} 
              onChange={(e) => setContrasena(e.target.value)} 
              required
              style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
              placeholder="Ej. 123"
            />
          </div>

          {error && <p style={{ color: '#dc2626', fontSize: '0.85rem', margin: 0, textAlign: 'center' }}>{error}</p>}

          <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.75rem', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '0.5rem' }}>
            Ingresar al Sistema
          </button>
        </form>
      </div>
    </Layout>
  );
}