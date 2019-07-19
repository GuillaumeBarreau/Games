import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
    background: #d915eb;
    background-image: linear-gradient(to bottom, #d915eb, #cd30db);
    border-radius: 24px;
    border: 0px;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 24px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background: #9d28e0;
        text-decoration: none;
    }
    &:active {
        background: #7d28e0;
    }
`;

const Btn = ({ texte, eventClick }) => {

    return (
        <Button
            onClick={() => eventClick(eventClick)}
        >
            <p>{ texte }</p>
        </Button>
    )

}

export default Btn;