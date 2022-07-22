import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const H2Styled = styled.h1`
    text-align: center;
    color: ${colors.white};
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 120%;
    @media (min-width: 576px) {
        font-size: 40px !important;
    }
    @media (min-width: 992px) {
        font-size: 48px !important;
    }
`;

const H2 = (props) => {
    return <H2Styled {...props} />;
};

export default H2;
