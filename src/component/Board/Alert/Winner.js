import React from 'react';

import styled from 'styled-components';
import { stylePlayerOne, stylePlayerTwo, styleDefault } from '../../../configStyledComponent/variable';

const ModalMessage = styled.div`
`;

const Strong = styled.strong`
    color: ${
    props => ((props.player === 'playerTwo')
        ? stylePlayerTwo.color
        : (props.player === 'playerOne')
            ? stylePlayerOne.color
            : styleDefault.color)
    };
`;

const Btn = ({ playerWin }) => (
  <ModalMessage>
    {
            playerWin && (playerWin === 'egality')
                ? (
                  <p>
                    <Strong player={playerWin}>{playerWin}</Strong>
                    {' '}
                    try again !!!
                  </p>
                )
                : playerWin && (playerWin !== 'egality')
                    ? (
                      <p>
                        GameOver
                        {' '}
                        <Strong player={playerWin}>{playerWin}</Strong>
                        {' '}
                        win !!!
                      </p>
                    )
                    : <p>Good Luck</p>
        }
  </ModalMessage>
);

export default Btn;
