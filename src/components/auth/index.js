import React from 'react';
import styled, { css } from 'styled-components';
import Flex from '../../style/Flex';
import LogoSrc from '../../images/logo.png';
import FilledButton from '../../style/Button';
import ButtonOutline from '../../style/ButtonOutline';
import { useHistory } from 'react-router-dom';
import Text from '../../style/Text';

const AuthWrapper = styled.div`
    width: 100%;
    min-height: inherit;
    background-image: url(images/bg-auth.png);
    background-size: cover;
    background-position: center;
`;

const ContainerFlex = styled(Flex)`
    min-height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const Logo = styled.img`
    width: 197px;
    height: auto;
    margin-top: auto;
    padding-top: 3rem;
    @media (min-width: 576px) {
        width: 278px;
    }
`;

const ButtonSize = css`
    max-width: 334px;
    width: 100%;
    height: auto;
`;

const StyledButton = styled(FilledButton)`
    ${ButtonSize}
`;

const StyledButtonOutline = styled(ButtonOutline)`
    ${ButtonSize}
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const Auth = () => {
    const history = useHistory();

    return (
        <AuthWrapper>
            <ContainerFlex>
                <Logo src={LogoSrc} />
                <StyledButton onClick={() => history.push('/login')}>
                    Войти
                </StyledButton>
                <StyledButtonOutline
                    onClick={() => history.push('/registration')}
                >
                    Зарегистрироваться
                </StyledButtonOutline>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </AuthWrapper>
    );
};

export default Auth;
