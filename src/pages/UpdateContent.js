import React, { useContext } from 'react';
import FormModal from '../components/FormModal';
import { ModalContext } from '../contexts/ModalContext';

function UpdateContent({ mode, setMode }) {
  // console.log('UpdateContent render');

  const { showModal } = useContext(ModalContext);

  return <>{showModal && <FormModal mode={mode} setMode={setMode} />}</>;
}

export default UpdateContent;
