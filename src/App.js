// Eksempel på routing-oppsett for admin-delen i React
// Forutsetter at du bruker React Router v6+
// App.js – routing for LoggMee admin

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminPanel from './AdminPanel';
import AdminSprak from './AdminSprak';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/qr" element={<AdminPanel />} />
        <Route path="/admin/sprak" element={<AdminSprak />} />
        <Route path="*" element={<div>404 - Ikke funnet</div>} />
      </Routes>
    </Router>
  );
};

export default App;
