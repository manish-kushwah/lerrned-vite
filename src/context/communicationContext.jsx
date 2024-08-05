import React, { createContext, useState } from 'react';

export const CommunicationContext = createContext();

export const CommunicationProvider = ({ children }) => {
  const [communication, setCommunication] = useState([]);

  return (
    <CommunicationContext.Provider value={{ communication, setCommunication }}>
      {children}
    </CommunicationContext.Provider>
  );
};
