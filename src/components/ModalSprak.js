// Modalinnhold for språkvalg
import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ModalSprak = ({ onClose }) => {
  const [language, setLanguage] = useState('nb');

  return (
    <div>
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

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalSprak;
