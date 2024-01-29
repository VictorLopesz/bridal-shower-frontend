// components/Modal.js

import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz da aplicação para acessibilidade

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-black opacity-50"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md"
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
