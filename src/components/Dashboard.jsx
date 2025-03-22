import React, { useEffect, useState } from 'react';
import NearbyAlertPopup from './NearbyAlertPopup';

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedAlerts = JSON.parse(localStorage.getItem('safety_alerts')) || [];
      setAlerts(storedAlerts);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mt-8">
      <h2 className="text-xl font-semibold mb-4">📋 Incoming Alerts</h2>
      {alerts.length === 0 ? (
        <p className="text-gray-500">No alerts received yet.</p>
      ) : (
        alerts.map((alert, index) => (
          <NearbyAlertPopup key={index} alert={alert} />
        ))
      )}
    </div>
  );
};

export default Dashboard;
