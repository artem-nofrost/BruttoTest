import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const TextStyled = styled.p`
    text-align: center;
    color: ${colors.white};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;

const Text = (props) => {
    return <TextStyled {...props} />;
};

export default Text;
