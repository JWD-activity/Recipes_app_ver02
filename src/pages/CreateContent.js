import React, { useContext } from 'react';
import FormModal from '../components/FormModal';
import { ModalContext } from '../contexts/ModalContext';

const CreateContent = ({ mode, setMode }) => {
  console.log('CreateContent render');
  const { showModal } = useContext(ModalContext);

  return <>{showModal && <FormModal mode={mode} setMode={setMode} />}</>;
};

export default CreateContent;
