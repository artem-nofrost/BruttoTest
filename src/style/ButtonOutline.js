import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { colors } from './colors';

const ButtonStyled = styled(Button)`
    font-family: 'Rubik', Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 125px;
    color: ${colors.white};
    background: ${colors.transparent};
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    &:hover {
        color: #363636;
        background: ${colors.white};
    }
    &:focus,
    :active {
        color: #363636;
        border-color: ${colors.white};
    }
`;

const ButtonOutline = (props) => {
    return <ButtonStyled {...props} />;
};

export default ButtonOutline;
