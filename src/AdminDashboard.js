// AdminDashboard.js – med dynamisk tema og modaler
import React, { useState, useEffect } from 'react';
import CustomButton from './components/CustomButton';
import ModalBase from './components/ModalBase';
import ModalSprak from './components/ModalSprak';
import ModalTema from './components/ModalTema';
import ModalPostering from './components/ModalPostering';
import ModalEksport from './components/ModalEksport';
import { hentAdminInnstillinger } from './firebase/hentAdminInnstillinger';

const AdminDashboard = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [innstillinger, setInnstillinger] = useState({});
  const [loading, setLoading] = useState(true);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    async function fetchData() {
      const data = await hentAdminInnstillinger("demoEvent");
      if (data) setInnstillinger(data);
      setLoading(false);
    }
    fetchData();
  }, [activeModal]); // <- henter oppdatert tema når man lukker en modal

  const style = {
    backgroundColor: innstillinger.temafarge || '#f0f0f0',
    backgroundImage: innstillinger.bakgrunnsbildeUrl
      ? `url(${innstillinger.bakgrunnsbildeUrl})`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: 'sans-serif',
  };

  return (
    <div style={style}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Adminpanel – LoggMee</h1>

        {loading ? (
          <p>Laster innstillinger...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <CustomButton onClick={() => setActiveModal('sprak')}>Språkvalg</CustomButton>
            <CustomButton onClick={() => setActiveModal('tema')}>Tema og bakgrunn</CustomButton>
            <CustomButton onClick={() => setActiveModal('postering')}>Posteringsvalg</CustomButton>
            <CustomButton onClick={() => setActiveModal('eksport')}>Eksport av innlegg</CustomButton>
            <CustomButton onClick={() => window.location.href = '/admin/qr'}>QR-kode generator</CustomButton>
          </div>
        )}

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
    </div>
  );
};

export default AdminDashboard;
