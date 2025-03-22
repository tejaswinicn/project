import React from 'react';
import SOSButton from './components/SOSButton';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Smart Safety Badge
      </h1>
      <div className="flex flex-col items-center gap-6">
        <SOSButton />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
