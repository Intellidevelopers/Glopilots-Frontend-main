import React, { createContext, useState } from 'react';

export const HashContext = createContext();

export const HashProvider = ({ children }) => {
  // Initialize the hash state with "123456789"
  const [globalHash, setGlobalHash] = useState("123456789");

  return (
    <HashContext.Provider value={{ globalHash, setGlobalHash }}>
      {children}
    </HashContext.Provider>
  );
};
