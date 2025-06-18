// ModalSprak.js
import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ModalSprak = ({ onClose }) => {
  const [language, setLanguage] = useState('no');
  const [dateFormat, setDateFormat] = useState('dd.mm.yyyy');
  const [status, setStatus] = useState('');

  const handleSave = async () => {
    try {
      setStatus('Lagrer...');
      // Her kan du koble til Firestore hvis ønskelig senere
      console.log('Språkvalg lagret:', { language, dateFormat });
      setStatus('Valg lagret!');
    } catch (error) {
      console.error(error);
      setStatus('Kunne ikke lagre valg.');
    }
  };

  return (
    <div>
      <p>Velg språk og datoformat.</p>

      <div style={{ marginBottom: '1rem' }}>
        <label>Språk:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ marginLeft: '1rem' }}
        >
          <option value="no">Norsk</option>
          <option value="en">English</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Datoformat:</label>
        <select
          value={dateFormat}
          onChange={(e) => setDateFormat(e.target.value)}
          style={{ marginLeft: '1rem' }}
        >
          <option value="dd.mm.yyyy">dd.mm.yyyy</option>
          <option value="yyyy-mm-dd">yyyy-mm-dd</option>
        </select>
      </div>

      <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
        <CustomButton onClick={handleSave}>Lagre valg</CustomButton>
      </div>

      {status && <p>{status}</p>}

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalSprak;
