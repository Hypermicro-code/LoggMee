// Modalinnhold for eksport av innlegg
import React from 'react';
import CustomButton from './CustomButton';

const ModalEksport = ({ onClose }) => {
  const handleExport = (type) => {
    alert(`Starter eksport som ${type.toUpperCase()}`);
    // Her kan du senere koble til faktisk eksportfunksjon
  };

  return (
    <div>
      <p>Velg format du vil eksportere gjesteboksinnlegg til:</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <CustomButton onClick={() => handleExport('pdf')}>Eksporter som PDF</CustomButton>
        <CustomButton onClick={() => handleExport('csv')}>Eksporter som CSV</CustomButton>
        <CustomButton onClick={() => handleExport('json')}>Eksporter som JSON</CustomButton>
      </div>

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalEksport;
