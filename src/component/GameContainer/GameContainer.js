import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    background: #d7dfe7ad;
    height: 150px;
    width: 250px;
    border: 1px solid black;
    cursor: pointer;
    margin: 1rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const GameContainer = ({ gameName, eventClick }) => (
  <Container
    onClick={() => eventClick(gameName)}
  >
    <p>
      {gameName}
    </p>
  </Container>
);

export default GameContainer;
