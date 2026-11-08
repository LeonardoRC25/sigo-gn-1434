import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RutaProtegida({ children }) {
  const sesion = localStorage.getItem('sigoUsuario');

  // Si no hay sesión iniciada, redirige al login obligatoriamente
  if (!sesion) {
    return <Navigate to="/" replace />;
  }

  return children;
}