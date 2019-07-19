import React from 'react';

import styled from 'styled-components';

const Strong = styled.strong`
    color: ${
    props => (props.player === "playerTwo")
        ? "#d915eb"
        : (props.player === "playerOne")
            ? "#5ca9ff"
            : "white"
    };
`;

const Btn = ({ playerWin }) => {

    return (
        <>
            {
                playerWin && (playerWin === "egality")
                    ? <p>Egality try again !!!</p>
                    : playerWin && (playerWin !== "egality")
                        ? <p>GameOver <Strong player={playerWin}>{playerWin}</Strong> win !!!</p>
                        : <p>Good Luck</p>
            }
        </>
    )

}

export default Btn;