import React, { useState, createContext } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  // Close modal handler
  const closeModal = () => {
    setShowModal(false);
  };

  // (Add a new recipe) modal open handler
  const createModalOpen = () => {
    setShowModal(true);
  };

  // (update a recipe) modal open handler
  const updateModalOpen = () => {
    setShowModal(true);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        closeModal,
        createModalOpen,
        updateModalOpen,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
