import React from 'react';

import { style_playerOne, style_playerTwo, style_default } from '../../../configStyledComponent/variable';
import styled from 'styled-components';

const ModalMessage = styled.div`
`;

const Strong = styled.strong`
    color: ${
        props => (props.player === "playerTwo")
            ? style_playerTwo.color
            : (props.player === "playerOne")
                ? style_playerOne.color
                : style_default.color
    };
`;

const Btn = ({ playerWin }) => {

    return (
        <ModalMessage>
            {
                playerWin && (playerWin === "egality")
                    ? <p><Strong player={playerWin}>{playerWin}</Strong> try again !!!</p>
                    : playerWin && (playerWin !== "egality")
                        ? <p>GameOver <Strong player={playerWin}>{playerWin}</Strong> win !!!</p>
                        : <p>Good Luck</p>
            }
        </ModalMessage>
    )

}

export default Btn;