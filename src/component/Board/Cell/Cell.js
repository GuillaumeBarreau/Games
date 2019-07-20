import React from 'react';

import styled from 'styled-components';

const Cell = ({
 indexRow, indexCol, playAction, valuePlayer 
}) => {
  // ///////////////////////////////
  // //////STYLED COMPONENTS////////
  // ///////////////////////////////

  const CellWrapper = styled.div`
        height: 70px;
        width: 70px;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

  const CellContent = styled.div`
        height: 55px;
        width: 55px;
        border-radius: 50%;
        background: ${
          props => ((props.colorPlayer === 'playerTwo')
            ? '#d915eb'
            : (props.colorPlayer === 'playerOne')
              ? '#5ca9ff'
              : 'white')
        };
    `;

  // ///////////////////////////////
  // //////RETURN COMPONENT/////////
  // ///////////////////////////////

  return (
    <CellWrapper
      key={`${indexRow}_${indexCol}`}
      onClick={e => playAction(e.target, indexCol, indexRow)}
    >
      <CellContent
        colorPlayer={valuePlayer}
      />
    </CellWrapper>
  );
};

export default Cell;
