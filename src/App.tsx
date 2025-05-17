import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AuditorLogin from './components/AuditorLogin/AuditorLogin';
import AuditorDashboard from './components/AuditorDashboard/AuditorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auditor/login" element={<AuditorLogin />} />
        <Route path="/auditor/dashboard" element={<AuditorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
