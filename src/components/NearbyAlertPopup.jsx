import React from 'react';

const NearbyAlertPopup = ({ alert }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded border border-yellow-400 mb-2">
      <p><strong>🚨 Emergency Type:</strong> {alert.emergency}</p>
      <p><strong>📍 Location:</strong> {alert.location}</p>
      <p><strong>🕒 Time:</strong> {new Date(alert.timestamp).toLocaleTimeString()}</p>
    </div>
  );
};

export default NearbyAlertPopup;
