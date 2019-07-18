import React, { useState } from 'react';

import styled from 'styled-components'

const Cell = ({ indexRow, indexCol, playAction, valuePlayer }) => {

    /////////////////////////////////
    ////////STYLED COMPONENTS////////
    /////////////////////////////////

    const Cell = styled.div `
        height: 70px;
        width: 70px;
        background: #676060;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const ContentCell = styled.div `
        height: 55px;
        width: 55px;
        border-radius: 50%;
        background: ${
            props => (props.colorPlayer === "playerTwo")
                ? "yellow"
                : (props.colorPlayer === "playerOne")
                ? "#5ca9ff"
                : "white"
        };
    `;

    /////////////////////////////////
    ////////RETURN COMPONENT/////////
    /////////////////////////////////

    return (
        <Cell 
            key = { `${indexRow}_${indexCol}` } 
            onClick = { e => playAction(e.target, indexCol) }
        >
            <ContentCell 
                colorPlayer = { valuePlayer }
            />
        </Cell>
    )
}

export default Cell;
