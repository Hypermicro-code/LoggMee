// Eksempel på routing-oppsett for admin-delen i React
// Forutsetter at du bruker React Router v6+

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AdminPanel from './AdminPanel'; // Dette må splittes i undersider senere

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/sprak" element={<div>Språkvalg kommer her</div>} />
        <Route path="/admin/tema" element={<div>Tema og bakgrunn kommer her</div>} />
        <Route path="/admin/postering" element={<div>Posteringsvalg kommer her</div>} />
        <Route path="/admin/eksport" element={<div>Eksportfunksjon kommer her</div>} />
        <Route path="/admin/qr" element={<AdminPanel />} />
        <Route path="*" element={<div>404 - Ikke funnet</div>} />
      </Routes>
    </Router>
  );
};

export default App;
