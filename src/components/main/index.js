import React from 'react';
import styled from 'styled-components';
import Flex from '../../style/Flex';
import LogoSrc from '../../images/logo.png';
import H1 from '../../style/H1';
import Text from '../../style/Text';

const TechWorkWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(images/bg-techwork.png);
    background-size: cover;
    background-position: center;
`;

const ContainerFlex = styled(Flex)`
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 197px;
    height: auto;
    margin: 15px;
    @media (min-width: 576.5px) {
        width: 278px;
    }
`;

const BottomText = styled(Text)`
    position: absolute;
    bottom: 0;
    font-size: 12px;
    line-height: 16px;
`;

const Main = () => {
    return (
        <TechWorkWrapper>
            <ContainerFlex>
                <Logo src={LogoSrc} />
                <H1>
                    На сайте ведутся технические работы <br />
                    Мы скоро вернемся
                </H1>
                <H1>Stay BRUTTO!</H1>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </TechWorkWrapper>
    );
};

export default Main;
