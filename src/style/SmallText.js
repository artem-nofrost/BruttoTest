import React from 'react';
import styled from 'styled-components';
import { colors } from './colors';

const SmallTextStyled = styled.p`
    text-align: center;
    color: ${colors.white};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
`;

const SmallText = (props) => {
    return <SmallTextStyled {...props} />;
};

export default SmallText;
