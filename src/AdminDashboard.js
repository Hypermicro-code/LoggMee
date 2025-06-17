// Hovedside for admin-panelet – LoggMee
// AdminDashboard.js – med modaler og CustomButton

import React, { useState } from 'react';
import CustomButton from './components/CustomButton';
import ModalBase from './components/ModalBase';

const AdminDashboard = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Adminpanel – LoggMee</h1>

      <CustomButton onClick={() => setActiveModal('sprak')}>Språkvalg</CustomButton>
      <CustomButton onClick={() => setActiveModal('tema')}>Tema og bakgrunn</CustomButton>
      <CustomButton onClick={() => setActiveModal('postering')}>Posteringsvalg</CustomButton>
      <CustomButton onClick={() => setActiveModal('eksport')}>Eksport av innlegg</CustomButton>
      <CustomButton onClick={() => window.location.href = '/admin/qr'}>QR-kode generator</CustomButton>

      {/* Modal for språkvalg */}
      {activeModal === 'sprak' && (
        <ModalBase title="Språkvalg" onClose={closeModal}>
          <p>Her kommer språkvalg-innhold.</p>
        </ModalBase>
      )}

      {/* Flere modaler kan legges til på samme måte */}
    </div>
  );
};

export default AdminDashboard;

