import React from 'react';

import { style_playerOne, style_playerTwo, style_default } from '../../configStyledComponent/variable';
import styled from 'styled-components';

/////////////////////////////////
////////STYLED COMPONENTS////////
/////////////////////////////////

const Button = styled.button`
    background: ${
        props => (props.playerWin === "playerTwo")
            ? style_playerTwo.color
            : (props.playerWin === "playerOne")
                ? style_playerOne.color
                : style_default.color
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
            props => (props.playerWin === "playerTwo")
                ? style_playerTwo.hover
                : (props.playerWin === "playerOne")
                    ? style_playerOne.hover
                    : style_default.hover
        };
        text-decoration: none;
    }
    
    &:active {
        background: ${
            props => (props.playerWin === "playerTwo")
                ? style_playerTwo.active
                : (props.playerWin === "playerOne")
                    ? style_playerOne.active
                    : style_default.active
        };
    }
`;

const Btn = ({ texte, eventClick, playerWin }) => {

    return (
        <Button
            onClick={() => eventClick(eventClick)}
            playerWin={playerWin}
        >
            <p>{texte}</p>
        </Button>
    )

}

export default Btn;