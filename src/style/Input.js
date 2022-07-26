import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { colors } from './colors';

const InputStyled = styled(Input)`
    background: ${colors.transparent}!important;
    padding: 1.5rem 2rem;
    color: ${colors.white};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid;
    border-color: #ffffff4d !important;
    &::placeholder {
        font-family: 'Rubik', Helvetica, Arial, sans-serif;
        color: ${colors.white}!important;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
`;

const InputDesctop = (props) => {
    return <InputStyled {...props} />;
};

export default InputDesctop;
