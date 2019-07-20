import React, { useState } from 'react';

import styled from 'styled-components';
import Cell from '../../Board/Cell/Cell';
import { checkIfThereAWinner } from '../../../scripts/connect4/validation';
import generateBoard from '../../../scripts/generateBoard';
import gamesConfig from '../../../scripts/gamesConfig';

const Connect4 = () => {
    const [launchGame, setLaunchGame] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [playerWin, setPlayerWin] = useState(false);
    const [board, setBoard] = useState('');
    const [countMoves, setCountMoves] = useState('');

    const initGame = (row, col) => {
        setCountMoves(0);
        setBoard(generateBoard(row, col));
        setCurrentPlayer('playerOne');
        setLaunchGame(true);
    };

    const boardIsFull = () => {
        const maxMoves = gamesConfig.Connect4.cols * gamesConfig.Connect4.rows;
        return maxMoves === (countMoves + 1);
    };

    const nextPlayer = () => {
        setCurrentPlayer(
            (currentPlayer === 'playerOne')
                ? 'playerTwo'
                : 'playerOne'
        );
    };
    
    const gameCore = (_, col) => {
        // On place le joueur dans le tableau.
        for (let r = gamesConfig.Connect4.rows; r >= 0; r -= 1) {
            if (r === 0) return;

            if (!board[r - 1][col]) {
                board[r - 1][col] = currentPlayer;
                break;
            }
        }

        // On ajoute 1 au compteur d'action.
        setCountMoves(countMoves + 1);

        // On regarde si un joueur a gagné.
        if (checkIfThereAWinner(board)) {
            setPlayerWin(currentPlayer);
            return;
        }

        // S'il n'y a pas ge gagnant on regarde si le board est rempli.
        if (boardIsFull()) {
            setPlayerWin('egality');
            return;
        }

        // On passe au joueur suivant.
  
        nextPlayer();
    };


    // ///////////////////////////////
    // //////STYLED COMPONENTS////////
    // ///////////////////////////////

    const InitGame = styled.button`
        background: grey;
        color: white;
    `;

    const Wrapper = styled.section`
        background-image: linear-gradient(to right bottom, #1d1c1c, #241e21, #282129, #262632, #1e2c3b);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    `;

    const Grid = styled.div`
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: repeat(${gamesConfig.Connect4.cols}, 1fr);
        grid-template-rows: auto; 
        grid-column-gap: 8px;
        grid-row-gap: 8px;
    `;

    // ///////////////////////////////
    // //////RETURN COMPONENT/////////
    // ///////////////////////////////

    return (
      <Wrapper>
        {
                launchGame
                    ? (
                      <p>
                        {currentPlayer}
                        {' '}
                            turn is now !
                      </p>
                    )
                    : null
            }
        {
                !launchGame
                    ? (
                      <InitGame
                        onClick={initGame(gamesConfig.Connect4.rows, gamesConfig.Connect4.cols)}
                      >
                            Launch Game
                      </InitGame>
                    )
                    : (
                      <Grid>
                        {
                                board.map(
                                    (row, indexRow) =>
                                        row.map(
                                            (valuePlayer, indexCol) => (
                                              <Cell
                                                key={`${indexRow}_${indexCol}`} /* eslint-disable-line react/no-array-index-key */
                                                indexRow={indexRow}
                                                indexCol={indexCol}
                                                playAction={gameCore}
                                                valuePlayer={valuePlayer}
                                              />
                                            )
                                        )
                                )
                            }
                      </Grid>
                    )
            }
        {
                playerWin && (playerWin === 'egality')
                    ? <p>Egality try again !!!</p>
                    : playerWin && (playerWin !== 'egality')
                        ? (
                          <p>
                                GameOver
                            {' '}
                            {playerWin}
                            {' '}
                                win !!!
                          </p>
                        )
                        : <p>Good Luck</p>
            }
      </Wrapper>
    );
};

export default Connect4;
