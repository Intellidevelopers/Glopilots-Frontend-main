import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: null,
    email: null,
  });

  const setAuthToken = (newToken, email) => {
    setAuthData({ token: newToken, email });
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
