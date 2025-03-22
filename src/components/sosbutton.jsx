import React from 'react';
import { simulateBluetoothSignal } from '../utils/bluetoothSim';

const SOSButton = () => {
  const handlePress = () => {
    simulateBluetoothSignal({
      location: '12.9716° N, 77.5946° E',
      emergency: 'Harassment',
      timestamp: new Date().toISOString()
    });
    alert('🚨 SOS Signal Sent!');
  };

  return (
    <button
      onClick={handlePress}
      className="bg-red-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-700 shadow-lg"
    >
      Send SOS 🚨
    </button>
  );
};

export default SOSButton;
