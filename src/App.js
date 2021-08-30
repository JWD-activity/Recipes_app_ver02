import React, { useState } from 'react';
import './App.css';
import Header from './UI/Header';

import WelcomeContent from './pages/WelcomeContent';
import ReadContent from './pages/ReadContent';
import UpdateContent from './pages/UpdateContent';
import CreateContent from './pages/CreateContent';
import RecipesContextProvider from './contexts/RecipesContext';
import SelectedIdContextProvider from './contexts/SelectedIdContext';
import ModalContextProvider from './contexts/ModalContext';

console.log('First App render');

function App() {
  // console.log('App render');
  const [mode, setMode] = useState('');

  return (
    <div className='app container'>
      <RecipesContextProvider setMode={setMode}>
        <ModalContextProvider>
          <Header setMode={setMode} />

          <SelectedIdContextProvider>
            {mode === 'welcome' ? (
              <WelcomeContent />
            ) : mode === 'read' ? (
              <ReadContent mode={mode} setMode={setMode} />
            ) : mode === 'create' ? (
              <CreateContent mode={mode} setMode={setMode} />
            ) : mode === 'update' ? (
              <UpdateContent mode={mode} setMode={setMode} />
            ) : (
              ''
            )}
          </SelectedIdContextProvider>
        </ModalContextProvider>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
