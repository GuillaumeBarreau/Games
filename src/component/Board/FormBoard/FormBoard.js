import React from 'react';
import styled from 'styled-components';
import GameContainer from '../../GameContainer/GameContainer';

const FormBoard = ({ isShowing, launchGameState, selectedGame }) => {
    const playGame = (gameName) => {
        launchGameState();
        selectedGame(gameName);
    };

    // ///////////////////////////////
    // //////STYLED COMPONENTS////////
    // ///////////////////////////////

    const GamesContainer = styled.div`
        display: flex;
    `;

    // ///////////////////////////////
    // //////RETURN COMPONENT/////////
    // ///////////////////////////////

    return isShowing
        ? (
          <GamesContainer>

            <GameContainer
              eventClick={playGame}
              gameName="Connect4"
            />

            <GameContainer
              eventClick={playGame}
              gameName="TicTacToe"
            />

          </GamesContainer>
        )
        : null;
};

export default FormBoard;
