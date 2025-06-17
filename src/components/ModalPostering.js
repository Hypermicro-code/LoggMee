// Modalinnhold for valg av tillatte innleggs-typer og publisering
import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ModalPostering = ({ onClose }) => {
  const [autoPublish, setAutoPublish] = useState(true);
  const [allowedTypes, setAllowedTypes] = useState({ text: true, image: true, video: false });

  const toggleType = (type) => {
    setAllowedTypes((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div>
      <p>Velg hva gjester kan poste og hvordan innlegg skal publiseres:</p>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input
            type="checkbox"
            checked={autoPublish}
            onChange={(e) => setAutoPublish(e.target.checked)}
          />{' '}
          Publiser innlegg automatisk
        </label>
      </div>

      <div>
        <p>Tillatte innholdstyper:</p>
        <label>
          <input type="checkbox" checked={allowedTypes.text} onChange={() => toggleType('text')} /> Tekst
        </label><br />
        <label>
          <input type="checkbox" checked={allowedTypes.image} onChange={() => toggleType('image')} /> Bilde
        </label><br />
        <label>
          <input type="checkbox" checked={allowedTypes.video} onChange={() => toggleType('video')} /> Video
        </label>
      </div>

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalPostering;
