import React, { useState } from 'react';

import Cell from '../../Board/Cell/Cell';
import AlertWinner from '../../Board/Alert/Winner';
import { checkIfThereAWinner } from '../../../scripts/ticTacToe/validation';
import { generateBoard } from '../../../scripts/generateBoard';
import { gamesConfig } from '../../../scripts/gamesConfig';
import styled from 'styled-components';

const TicTacToe = () => {

    const [launchGame, setLaunchGame] = useState("");
    const [currentPlayer, setCurrentPlayer] = useState("");
    const [playerWin, setPlayerWin] = useState("");
    const [board, setBoard] = useState("");
    const [countMoves, setCountMoves] = useState("");

    const boardIsFull = () => {

        const maxCountMoves = gamesConfig.TicTacToe.cols * gamesConfig.TicTacToe.rows;
        const currentCountMoves = countMoves + 1;

        return (maxCountMoves === currentCountMoves);

    }

    const initGame = (row, col) => {

        setCountMoves(0);
        setBoard(generateBoard(row, col));
        setCurrentPlayer("playerOne");
        setLaunchGame(true);

    }

    const gameCore = (_, col, row) => {

        if (board[row][col] || playerWin) {
            return;
        }

        board[row][col] = currentPlayer;

        setCountMoves(countMoves + 1);

        if (checkIfThereAWinner(board, currentPlayer)) {
            setPlayerWin(currentPlayer);
            return;
        };

        if (boardIsFull()) {
            setPlayerWin('egality');
            return;
        }

        nextPlayer();

    }

    const nextPlayer = () => {

        setCurrentPlayer(
            (currentPlayer === "playerOne")
                ? "playerTwo"
                : "playerOne"
        );

    }

    /////////////////////////////////
    ////////STYLED COMPONENTS////////
    /////////////////////////////////

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
    grid-template-columns: repeat(${gamesConfig.TicTacToe.cols}, 1fr);
    grid-template-rows: auto; 
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  `;

    const Strong = styled.strong`
    color: ${
        props => (props.player === "playerTwo")
            ? "#d915eb"
            : (props.player === "playerOne")
                ? "#5ca9ff"
                : "white"
        };
  `;

    /////////////////////////////////
    ////////RETURN COMPONENT/////////
    /////////////////////////////////

    return (
        <Wrapper>
            {
                launchGame
                    ? <p><Strong player={currentPlayer} >{currentPlayer}</Strong> turn is now !</p>
                    : null
            }
            {
                !launchGame
                    ? <InitGame
                        onClick={initGame(gamesConfig.TicTacToe.rows, gamesConfig.TicTacToe.cols)}
                    >
                        Launch Game
            </InitGame >
                    : <Grid>
                        {
                            board.map(
                                (row, indexRow) =>
                                    row.map(
                                        (valuePlayer, indexCol) => {

                                            return (
                                                <Cell
                                                    key={`${indexRow}--${indexCol}`}
                                                    indexRow={indexRow}
                                                    indexCol={indexCol}
                                                    playAction={gameCore}
                                                    valuePlayer={valuePlayer}
                                                />
                                            )
                                        }
                                    )
                            )
                        }
                    </Grid>
            }
            <AlertWinner playerWin={playerWin} />
        </Wrapper>
    );
}

export default TicTacToe;
