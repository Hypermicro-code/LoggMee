// QR-generator side for admin – LoggMee

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const AdminPanel = () => {
  const [key, setKey] = useState('');
  const [generated, setGenerated] = useState(false);

  const generateKey = () => {
    const newKey = Math.random().toString(36).substring(2, 10);
    setKey(newKey);
    setGenerated(true);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>QR-kodegenerator</h1>
      <p>Trykk på knappen under for å generere en unik nøkkel og tilhørende QR-kode.</p>
      <button
        onClick={generateKey}
        style={{ padding: '1rem', fontSize: '1rem', marginBottom: '1rem', backgroundColor: '#0055aa', color: '#fff', border: 'none', borderRadius: '0.5rem' }}
      >
        Generer QR-nøkkel
      </button>
      {generated && (
        <div>
          <p><strong>Nøkkel:</strong> {key}</p>
          <QRCode value={key} size={128} />
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
