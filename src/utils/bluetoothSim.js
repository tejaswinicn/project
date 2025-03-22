export const simulateBluetoothSignal = (alert) => {
    const existingAlerts = JSON.parse(localStorage.getItem('safety_alerts')) || [];
    existingAlerts.push(alert);
    localStorage.setItem('safety_alerts', JSON.stringify(existingAlerts));
  };
  