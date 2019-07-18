import React, { useState } from 'react';
import styled from 'styled-components'

import useFormBoard from './component/FormBoard/useFormBoard'
import FormBoard from './component/FormBoard/FormBoard'
import Board from './component/Board/Board'

const App = () => {

  const [valueUpdateStatus, setValueUpdateStatus] = useState(false);
  
  const [valueRow, setValueRow] = useState(0);
  const [valueCol, setValueCol] = useState(0);

  const { isShowing, toggle } = useFormBoard();

  const updateValueRow = ( newValue ) => {
    setValueRow(newValue);
  };
  
  const updateValueCol = ( newValue ) => {
    setValueCol(newValue);
  };

  const changeValuesUpdate = () => {
    setValueUpdateStatus(true);
  };

  /////////////////////////////////
  ////////STYLED COMPONENTS////////
  /////////////////////////////////

  const Wrapper = styled.section `
    background: papayawhip;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
  `;

  const App = styled.div `
    text-align: center;
  `;

  /////////////////////////////////
  ////////RETURN COMPONENT/////////
  /////////////////////////////////

  let contentHtml;
  if (!valueUpdateStatus) {
    contentHtml = 
      <Wrapper>
        {
          !isShowing
          ?
            <button
              className = "button-default"
              onClick = { toggle }
            >
              Show Dashboard
            </button>
          :
            <FormBoard
              valuesUpdateStatus = { changeValuesUpdate }
              getValueRow = { updateValueRow }
              getValueCol = { updateValueCol }
              isShowing = { isShowing }
            />
        }
      </Wrapper>;
  } else {
    contentHtml = 
      <Board 
        valueRow = { valueRow }
        valueCol = { valueCol }
      /> ;
  }

  return (
    <App>
      { contentHtml }
    </App>
  );

};

export default App;
