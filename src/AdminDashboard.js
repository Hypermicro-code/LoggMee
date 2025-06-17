// AdminDashboard.js – med modaler og CustomButton
import React, { useState } from 'react';
import CustomButton from './components/CustomButton';
import ModalBase from './components/ModalBase';
import ModalSprak from './components/ModalSprak';
import ModalTema from './components/ModalTema';
import ModalPostering from './components/ModalPostering';
import ModalEksport from './components/ModalEksport';

const AdminDashboard = () => {
  const [activeModal, setActiveModal] = useState(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Adminpanel – LoggMee</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <CustomButton onClick={() => setActiveModal('sprak')}>Språkvalg</CustomButton>
        <CustomButton onClick={() => setActiveModal('tema')}>Tema og bakgrunn</CustomButton>
        <CustomButton onClick={() => setActiveModal('postering')}>Posteringsvalg</CustomButton>
        <CustomButton onClick={() => setActiveModal('eksport')}>Eksport av innlegg</CustomButton>
        <CustomButton onClick={() => window.location.href = '/admin/qr'}>QR-kode generator</CustomButton>
      </div>

      {activeModal === 'sprak' && (
        <ModalBase title="Språkvalg" onClose={closeModal}>
          <ModalSprak onClose={closeModal} />
        </ModalBase>
      )}

      {activeModal === 'tema' && (
        <ModalBase title="Tema og bakgrunn" onClose={closeModal}>
          <ModalTema onClose={closeModal} />
        </ModalBase>
      )}

      {activeModal === 'postering' && (
        <ModalBase title="Posteringsvalg" onClose={closeModal}>
          <ModalPostering onClose={closeModal} />
        </ModalBase>
      )}

      {activeModal === 'eksport' && (
        <ModalBase title="Eksport av innlegg" onClose={closeModal}>
          <ModalEksport onClose={closeModal} />
        </ModalBase>
      )}
    </div>
  );
};

export default AdminDashboard;
