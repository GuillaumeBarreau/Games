import React, { useState } from 'react';

import styled from 'styled-components';
import Cell from '../../Board/Cell/Cell';
import AlertWinner from '../../Board/Alert/Winner';
import { checkIfThereAWinner } from '../../../scripts/ticTacToe/validation';
import Btn from '../../Button/Button';
import generateBoard from '../../../scripts/generateBoard';
import gamesConfig from '../../../scripts/gamesConfig';
import { stylePlayerOne, stylePlayerTwo } from '../../../configStyledComponent/variable';

const TicTacToe = () => {
    const [launchGame, setLaunchGame] = useState('');
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [playerWin, setPlayerWin] = useState('');
    const [board, setBoard] = useState('');
    const [countMoves, setCountMoves] = useState('');

    const boardIsFull = () => {
        const maxCountMoves = gamesConfig.TicTacToe.cols * gamesConfig.TicTacToe.rows;
        const currentCountMoves = countMoves + 1;

        return (maxCountMoves === currentCountMoves);
    };
    
    const initGame = (row, col) => {
        setCountMoves(0);
        setBoard(generateBoard(row, col));
        setCurrentPlayer('playerOne');
        setLaunchGame(true);
        setPlayerWin('');
    };

    const retryGame = () => {
        initGame(gamesConfig.TicTacToe.rows, gamesConfig.TicTacToe.cols);
    };

    const nextPlayer = () => {
        setCurrentPlayer(
            (currentPlayer === 'playerOne')
                ? 'playerTwo'
                : 'playerOne'
        );
    };

    const gameCore = (_, col, row) => {
        if (board[row][col] || playerWin) {
            return;
        }

        board[row][col] = currentPlayer;

        setCountMoves(countMoves + 1);

        if (checkIfThereAWinner(board, currentPlayer)) {
            setPlayerWin(currentPlayer);
            return;
        }

        if (boardIsFull()) {
            setPlayerWin('egality');
            return;
        }

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
        background-image: 
            linear-gradient(to right bottom, #1d1c1c, #241e21, #282129, #262632, #1e2c3b);
        min-height: 100vh;
        position: relative;
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
        grid-template-columns: repeat(${gamesConfig.TicTacToe.cols}, 1fr);
        grid-template-rows: auto; 
        grid-column-gap: 8px;
        grid-row-gap: 8px;
        ${playerWin ? 'opacity: .4;' : null}
    `;

    const Strong = styled.strong`
        color: ${
        props => ((props.player === 'playerTwo')
            ? stylePlayerTwo.color
            : (props.player === 'playerOne')
                ? stylePlayerOne.color
                : 'white')
        };
    `;

    const ContentAlertWinner = styled.div`
        position: absolute;
        padding-bottom: 2rem;
        bottom: 0;
        left: calc(50% - 57px);
    `;

    // ///////////////////////////////
    // //////RETURN COMPONENT/////////
    // ///////////////////////////////

    return (
      <Wrapper>
        {
                launchGame && !playerWin
                    ? (
                      <p>
                        <Strong player={currentPlayer}>{currentPlayer}</Strong>
                        {' '}
                        turn is now !
                      </p>
                    )
                    : playerWin
                        ? <AlertWinner playerWin={playerWin} />
                        : null

            }
        {
                !launchGame
                    ? (
                      <InitGame
                        onClick={initGame(gamesConfig.TicTacToe.rows, gamesConfig.TicTacToe.cols)}
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
                playerWin
                    ? (
                      <ContentAlertWinner>
                        <Btn
                          eventClick={retryGame}
                          texte="Try Again"
                          playerWin={playerWin}
                        />
                      </ContentAlertWinner>
                    )
                    : null
            }
      </Wrapper>

    );
};

export default TicTacToe;
