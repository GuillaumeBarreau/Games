import React, { useState } from 'react';
import styled from 'styled-components';

import useFormBoard from './component/Board/FormBoard/useFormBoard';
import FormBoard from './component/Board/FormBoard/FormBoard';
import GameConnect4 from './component/Game/Connect4/Connect4';
import GameTicTactoe from './component/Game/TicTacToe/TicTacToe';
import Btn from './component/Button/Button';

const App = () => {
  
  const [launchGame, setLaunchGame] = useState(false);
  const [game, setGame] = useState("");

  const { isShowing, toggle } = useFormBoard();

  const launchGameState = () => {

    setLaunchGame(true);

  };

  const selectedGame = (getGame) => {

    setGame(getGame);

  };
  /////////////////////////////////
  ////////STYLED COMPONENTS////////
  /////////////////////////////////

  const Wrapper = styled.section`
    background-image: linear-gradient(to right bottom, #1d1c1c, #241e21, #282129, #262632, #1e2c3b);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: black;
  `;

  const App = styled.div`
    text-align: center;
  `;

  /////////////////////////////////
  ////////RETURN COMPONENT/////////
  /////////////////////////////////

  let contentHtml;
  if (!launchGame) {
    contentHtml =
      <Wrapper>
        {
          !isShowing
            ?
            <Btn 
              eventClick={toggle}
              texte="Ready To Play"
            />
            :
            <FormBoard
              launchGameState={launchGameState}
              selectedGame={selectedGame}
              game={game}
              isShowing={isShowing}
            />
        }
      </Wrapper>;
  } else {

    switch (game) {
      case 'Connect4':
        contentHtml = <GameConnect4 />;
        break;
      case 'TicTacToe':
        contentHtml = <GameTicTactoe />;
        break;
      default:
        contentHtml = <p>Sorry, not game found</p>
    }

  }

  return (
    <App>
      {contentHtml}
    </App>
  );

};

export default App;
