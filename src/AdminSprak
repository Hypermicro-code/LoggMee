// Språkvalg-side for admin
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminSprak = () => {
  const [language, setLanguage] = useState('nb');
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Språkvalg</h1>
      <p>Velg språk som skal brukes i appen:</p>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ fontSize: '1rem', padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      >
        <option value="nb">Norsk</option>
        <option value="en">Engelsk</option>
        <option value="de">Tysk</option>
      </select>
      <p>Valgt språk: <strong>{language}</strong></p>

      <button
        onClick={() => navigate('/admin')}
        style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#ccc', border: 'none', borderRadius: '0.5rem' }}
      >
        Tilbake til Admin-panel
      </button>
    </div>
  );
};

export default AdminSprak;
