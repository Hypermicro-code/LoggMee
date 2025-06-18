// ModalPostering.js – oppdatert med lagring til Firestore
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { lagreAdminInnstillinger } from '../firebase/lagreAdminInnstillinger';

const ModalPostering = ({ onClose }) => {
  const [publiseringAktivert, setPubliseringAktivert] = useState(true);
  const [posteringstype, setPosteringstype] = useState('kladd'); // eller 'umiddelbar'
  const [status, setStatus] = useState('');

  const handleSave = async () => {
    try {
      setStatus('Lagrer...');
      await lagreAdminInnstillinger('demoEvent', {
        publiseringAktivert,
        posteringstype,
      });
      setStatus('Valg lagret!');
    } catch (error) {
      console.error(error);
      setStatus('Kunne ikke lagre posteringstype.');
    }
  };

  return (
    <div>
      <p>Velg hvordan innlegg skal håndteres:</p>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="radio"
            value="kladd"
            checked={posteringstype === 'kladd'}
            onChange={() => setPosteringstype('kladd')}
          />
          Lagres som kladd først
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="umiddelbar"
            checked={posteringstype === 'umiddelbar'}
            onChange={() => setPosteringstype('umiddelbar')}
          />
          Publiseres umiddelbart
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={publiseringAktivert}
            onChange={(e) => setPubliseringAktivert(e.target.checked)}
          />
          Tillat publisering av innlegg
        </label>
      </div>

      <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
        <CustomButton onClick={handleSave}>Lagre valg</CustomButton>
      </div>

      {status && <p>{status}</p>}

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalPostering;
