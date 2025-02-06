import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Creamos el contexto para la autenticación
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario tiene un token en la cookie HttpOnly
    axios
      .get('http://localhost:4000/validate-token', { withCredentials: true })
      .then((response) => {
        if (response.data.valid) {
          setIsAuthenticated(true);  // El token es válido
        } else {
          setIsAuthenticated(false); // El token es inválido
        }
      })
      .catch(() => {
        setIsAuthenticated(false); // Error en la validación del token
      });
  }, []);

  const logUserIn = (token) => {
    // El token se guarda en una cookie HttpOnly automáticamente en el backend
    setIsAuthenticated(true);
    navigate('/home'); // Redirigir al usuario al inicio después de loguearse
  };

  const logUserOut = () => {
    // El token se elimina automáticamente del backend al hacer logout
    setIsAuthenticated(false);
    navigate('/login'); // Redirigir al login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logUserIn, logUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
