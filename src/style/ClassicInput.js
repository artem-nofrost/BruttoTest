import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { colors } from './colors';

const InputStyled = styled(Input)`
    background: ${colors.grey}!important;
    padding: 1rem 2rem;
    color: #ffffffcc;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    border: 0;
    border-color: ${colors.grey}!important;
    border-radius: 8px;
`;

const ClassicInput = (props) => {
    return <InputStyled {...props} />;
};

export default ClassicInput;
