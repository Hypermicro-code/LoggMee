// Modalinnhold for Tema og bakgrunn
import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ModalTema = ({ onClose }) => {
  const [color, setColor] = useState('#ffffff');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  return (
    <div>
      <p>Velg temafarge og last opp et bakgrunnsbilde.</p>

      <div style={{ marginBottom: '1rem' }}>
        <label>Temafarge:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ marginLeft: '1rem' }} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Bakgrunnsbilde:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {image && (
        <div style={{ marginTop: '1rem' }}>
          <p>Forhåndsvisning:</p>
          <img src={image} alt="bakgrunn" style={{ maxWidth: '100%', border: '1px solid #ccc' }} />
        </div>
      )}

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalTema;
