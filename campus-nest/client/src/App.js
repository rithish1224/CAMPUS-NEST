import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Complaints from './pages/Complaints';
import Notifications from './pages/Notifications';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
