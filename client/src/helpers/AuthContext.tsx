import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const saveToken = (newToken) => {
    setToken(newToken);
  };

  const getToken = () => {
    return token;
  };

  const removeToken = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, getToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
