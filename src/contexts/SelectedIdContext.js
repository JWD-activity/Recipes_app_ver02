import React, { useState, createContext } from 'react';

export const SelectedIdContext = createContext();

function SelectedIdContextProvider(props) {
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);

  const setSelectedId = (id) => {
    setSelectedRecipeId(id);
    // console.log('YOU CLIKCED', id);
  };

  return (
    <SelectedIdContext.Provider value={{ selectedRecipeId, setSelectedId }}>
      {props.children}
    </SelectedIdContext.Provider>
  );
}

export default SelectedIdContextProvider;
