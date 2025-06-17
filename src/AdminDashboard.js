// Hovedside for admin-panelet – LoggMee
// Viser store knapper til egne undersider for hver konfigurasjon

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goTo = (path) => () => navigate(path);

  const buttonStyle = {
    width: '100%',
    padding: '1.5rem',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: 'none',
    backgroundColor: '#0055aa',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Adminpanel – LoggMee</h1>

      <button style={buttonStyle} onClick={goTo('/admin/sprak')}>Språkvalg</button>
      <button style={buttonStyle} onClick={goTo('/admin/tema')}>Tema og bakgrunn</button>
      <button style={buttonStyle} onClick={goTo('/admin/postering')}>Posteringsvalg</button>
      <button style={buttonStyle} onClick={goTo('/admin/eksport')}>Eksport av innlegg</button>
      <button style={buttonStyle} onClick={goTo('/admin/qr')}>QR-kode generator</button>
    </div>
  );
};

export default AdminDashboard;
