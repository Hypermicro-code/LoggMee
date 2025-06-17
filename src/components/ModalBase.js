// ModalBase.js – gjenbrukbar modal for LoggMee admin
import React from 'react';

const ModalBase = ({ title, children, onClose }) => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#fff', borderRadius: '1rem', padding: '2rem', maxWidth: '600px', width: '100%', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        <div>{children}</div>
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer'
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ModalBase;
