// ModalTema.js – oppdatert for Firestore + Firebase Storage
import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { lagreAdminInnstillinger } from '../firebase/lagreAdminInnstillinger';
import { storage } from '../firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ModalTema = ({ onClose }) => {
  const [color, setColor] = useState('#ffffff');
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    if (selectedFile) reader.readAsDataURL(selectedFile);
  };

  const handleSave = async () => {
    try {
      setStatus('Lagrer...');
      let imageUrl = '';

      if (file) {
        const storageRef = ref(storage, `bakgrunnsbilder/demoEvent/${file.name}`);
        await uploadBytes(storageRef, file);
        imageUrl = await getDownloadURL(storageRef);
      }

      await lagreAdminInnstillinger('demoEvent', {
        temafarge: color,
        bakgrunnsbildeUrl: imageUrl,
      });

      setStatus('Tema lagret!');
    } catch (error) {
      console.error(error);
      setStatus('Kunne ikke lagre tema.');
    }
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

      <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
        <CustomButton onClick={handleSave}>Lagre tema</CustomButton>
      </div>

      {status && <p>{status}</p>}

      <CustomButton onClick={onClose} variant="secondary">Lukk</CustomButton>
    </div>
  );
};

export default ModalTema;
