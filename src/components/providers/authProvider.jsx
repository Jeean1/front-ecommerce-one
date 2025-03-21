import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validateSession } from '../services/authStoreAPI';

// Crear contexto de autenticación
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  // Función para validar la sesión con el backend
  // const validateSession = async () => {
  //   try {
  //     console.log("::: active");
  //     await axios.get("http://localhost:4000/private/auth/validate", {
  //       withCredentials: true, // Necesario para enviar cookies HttpOnly
  //     });
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.error(error);
  //     setIsAuthenticated(false);
  //   }
  // };

  // Ejecutar validación cuando la app carga

  const validateSessionFunction = async () => {
    const result = await validateSession();
    setIsAuthenticated(result);
  };

  useEffect(() => {
    validateSessionFunction();
  }, []);

  // Función para cerrar sesión
  const logout = async () => {
    await axios.post('http://localhost:4000/auth/logout', {}, { withCredentials: true });
    setIsAuthenticated(false);
    navigate('/login');
  };

  return <AuthContext.Provider value={{ isAuthenticated, validateSession, logout }}>{children}</AuthContext.Provider>;
};

// Hook para usar la autenticación en otros componentes
export const useAuth = () => {
  return useContext(AuthContext);
};
