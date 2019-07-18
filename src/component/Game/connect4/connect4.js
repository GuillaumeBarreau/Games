import React, { useState } from 'react';

import Cell from '../Cell/Cell'
import { checkIfThereAWinner } from '../../scripts/validation'

import styled from 'styled-components'

const Connect4 = () => {
  
  const [launchGame, setLaunchGame] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [playerWin, setPlayerWin] = useState(false);
  
  const initGame = (row, col) => {
    
    generateBoard(row, col);
    setCurrentPlayer("playerOne");
    setLaunchGame(true);
  
  }

  const playAction = (_, col) => {

    for (let r = valueRow - 1; r >= 0; r--) {
      if (!board[r][col]) {
        board[r][col] = currentPlayer;
        return nextPlayer();
      }
    };

  }

  const nextPlayer = () => {
    const results = checkIfThereAWinner(board)

    setPlayerWin(results);

    if (playerWin) {
      return;
    } 
    // else {
    //   const boardFull = checkIsBoarIsFull(board)
    // }

    

    setCurrentPlayer(
      (currentPlayer === "playerOne")
        ? "playerTwo"
        : "playerOne"
    );
    
  }

  /////////////////////////////////
  ////////STYLED COMPONENTS////////
  /////////////////////////////////

  const InitGame = styled.button `
    background: grey;
    color: white;
  `;

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
  
  const Grid = styled.div `
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(${valueCol}, 1fr);
    grid-template-rows: auto; 
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  `;

  /////////////////////////////////
  ////////RETURN COMPONENT/////////
  /////////////////////////////////

  return (
    <Wrapper>
      {
        launchGame
          ? <p>{ currentPlayer } turn is now !</p>
          : null
      }
      {
        !launchGame 
          ?  <InitGame 
                onClick= { initGame(valueRow, valueCol) }
              >
              Launch Game
              </InitGame >
          : <Grid >
             { 
                board.map(
                  (row, indexRow) =>
                    row.map(
                      (valuePlayer, indexCol) => {

                        return ( 
                          <Cell 
                            key = { `${ indexRow }_${ indexCol }` }
                            indexRow = { indexRow }
                            indexCol = { indexCol }
                            playAction={ playAction }
                            valuePlayer = { valuePlayer}
                          />
                        )
                      }
                    )
                ) 
              }
            </Grid>
        }
        {
          playerWin
            ? <p>GameOver { currentPlayer } win !!!</p>
            : null
        }
    </Wrapper>
  );
}

export default Connect4;
