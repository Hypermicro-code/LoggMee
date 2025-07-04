// QR-generator side for admin – LoggMee

import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './components/CustomButton';

const AdminPanel = () => {
  const [key, setKey] = useState('');
  const [generated, setGenerated] = useState(false);
  const navigate = useNavigate();

  const generateKey = () => {
    const newKey = Math.random().toString(36).substring(2, 10);
    setKey(newKey);
    setGenerated(true);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>QR-kodegenerator</h1>
      <p>Trykk på knappen under for å generere en unik nøkkel og tilhørende QR-kode.</p>

      <div style={{ marginBottom: '1.5rem' }}>
        <CustomButton onClick={generateKey}>Generer QR-nøkkel</CustomButton>
      </div>

      {generated && (
        <div style={{ marginBottom: '2rem' }}>
          <p><strong>Nøkkel:</strong> {key}</p>
          <QRCode value={key} size={128} />
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <CustomButton variant="secondary" onClick={() => navigate('/admin')}>
          Tilbake til Admin-panel
        </CustomButton>
      </div>
    </div>
  );
};

export default AdminPanel;
