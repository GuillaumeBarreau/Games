import React from 'react';

import styled from 'styled-components';
import { stylePlayerOne, stylePlayerTwo, styleDefault } from '../../configStyledComponent/variable';

// ///////////////////////////////
// //////STYLED COMPONENTS////////
// ///////////////////////////////

const Button = styled.button`
    background: ${
    props => ((props.playerWin === 'playerTwo')
        ? stylePlayerTwo.color
        : (props.playerWin === 'playerOne')
            ? stylePlayerOne.color
            : styleDefault.color)
    };
    border-radius: 24px;
    border: 0px;
    color: #ffffff;
    font-size: calc(8px + 1vmin);
    padding: 8px 24px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background: ${
            props => ((props.playerWin === 'playerTwo')
                ? stylePlayerTwo.hover
                : (props.playerWin === 'playerOne')
                    ? stylePlayerOne.hover
                    : styleDefault.hover)
        };
        text-decoration: none;
    }
    
    &:active {
        background: ${
            props => ((props.playerWin === 'playerTwo')
                ? stylePlayerTwo.active
                : (props.playerWin === 'playerOne')
                    ? stylePlayerOne.active
                    : styleDefault.active)
        };
    }
`;

const Btn = ({ texte, eventClick, playerWin }) => (
  <Button
    onClick={() => eventClick(eventClick)}
    playerWin={playerWin}
  >
    <p>{texte}</p>
  </Button>
);

export default Btn;
