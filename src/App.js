import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';
import FormModal from './components/FormModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const onClickHanlder = () => {
    setShowModal(true);
  };

  const onCloseHanlder = () => {
    setShowModal(false);
  };

  return (
    <div className='app container'>
      {showModal && <FormModal onClose={onCloseHanlder} />}

      <Header onClickHanlder={onClickHanlder} />
      <main className='row'>
        <div className='recipe col'>Recipe</div>
      </main>
    </div>
  );
}

export default App;
