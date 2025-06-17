// Her bygger vi opp designsystemet for LoggMee admin (modals, knapper, komponenter)
// Vi kan jobbe strukturert i 'components/'-mappen her

// Du kan starte med å si hvilken komponent vi skal lage først:
// f.eks. CustomButton, Modal, Heading, Input, AdminCard, osv.

// Vi bygger alt modulært og gjenbrukbart – klart for import i resten av prosjektet

// Eksempel på grunnleggende knapp:

import React from 'react';

const CustomButton = ({ children, onClick, variant = 'primary' }) => {
  const base = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginBottom: '1rem',
  };

  const styles = {
    primary: { ...base, backgroundColor: '#0055aa', color: '#fff' },
    secondary: { ...base, backgroundColor: '#ccc', color: '#000' },
    danger: { ...base, backgroundColor: '#d33', color: '#fff' },
  };

  return (
    <button onClick={onClick} style={styles[variant]}>
      {children}
    </button>
  );
};

export default CustomButton;
