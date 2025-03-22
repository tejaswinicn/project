import React, { useContext } from 'react';
// 🆕 NEW: Importing global alert context
import { AlertContext } from '../context/AlertContext';
// 🆕 NEW: Utility to trigger sound + vibration
import { triggerFeedback } from '../utils/feedback';
// 🆕 NEW: Utility for browser notifications
import { showNotification } from '../utils/notify';

const SOSButton = () => {
  // 🆕 NEW: Accessing addAlert from global context
  const { addAlert } = useContext(AlertContext);

  const handlePress = () => {
    // 🆕 NEW: Alert object with static location and type
    const newAlert = {
      location: '12.9716° N, 77.5946° E',
      emergency: 'Harassment',
      timestamp: new Date().toISOString()
    };

    // 🆕 NEW: Saving alert globally
    addAlert(newAlert);
    // 🆕 NEW: Triggers vibration and alert sound
    triggerFeedback();
    // 🆕 NEW: Pushes browser notification
    showNotification('🚨 SOS Sent', 'Emergency alert has been triggered.');
    // Existing: Basic alert
    alert('SOS Signal Sent!');
  };

  return (
    <button
      onClick={handlePress}
      // 🆕 NEW: Tailwind styling for better UI
      className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 shadow-lg"
    >
      Send SOS 🚨
    </button>
  );
};

export default SOSButton;
