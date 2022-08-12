import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { colors } from './colors';

const ButtonStyled = styled(Button)`
    font-family: 'Rubik', Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 135px;
    color: ${colors.darkGrey};
    background: ${colors.white};
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    white-space: pre-wrap;
    &:hover {
        color: #363636;
    }
    &:focus,
    :active {
        color: #363636;
        border-color: ${colors.white};
    }
`;

const FilledButton = (props) => {
    return <ButtonStyled {...props} />;
};

export default FilledButton;
