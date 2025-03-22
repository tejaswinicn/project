import React, { createContext, useState, useEffect } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('safety_alerts')) || [];
    setAlerts(stored);
  }, []);

  const addAlert = (alert) => {
    const updated = [...alerts, alert];
    localStorage.setItem('safety_alerts', JSON.stringify(updated));
    setAlerts(updated);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
