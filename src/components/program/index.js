/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import Text from '../../style/Text';
import HeaderMenu from '../header';
import DesctopContent from './desctop';
import MobileContent from './mobile';

const AuthWrapper = styled.div`
    width: 100%;
    min-height: inherit;
    @media (max-width: 576.5px) {
        background: ${colors.darkGrey};
    }
`;

const MainContainer = styled.div`
    width: 100%;
    max-width: 1100px;
`;

const ContainerFlex = styled(Flex)`
    min-height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const Program = () => {
    const [weekNumber, setWeekNumber] = useState(0);

    return (
        <AuthWrapper>
            <ContainerFlex>
                <HeaderMenu headerText="Программа" />
                <MainContainer>
                    <DesctopContent weekNumber={weekNumber} />
                    <MobileContent
                        setWeekNumber={setWeekNumber}
                        weekNumber={weekNumber}
                    />
                </MainContainer>

                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </AuthWrapper>
    );
};

export default Program;
