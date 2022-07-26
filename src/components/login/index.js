import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Flex from '../../style/Flex';
import LogoSrc from '../../images/logo.png';
import GoogleIcon from '../../images/google-icon.svg';
import FacebookIcon from '../../images/facebook-icon.svg';
import VkIcon from '../../images/vk-icon.svg';
import FilledButton from '../../style/Button';
import { useHistory } from 'react-router-dom';
import { colors } from '../../style/colors';
import Text from '../../style/Text';
import { Form, Image } from 'antd';
import InputDesctop from '../../style/Input';
import { user } from '../../server/user';
import { fade_in } from '../../style/animations';

const AuthWrapper = styled.div`
    width: 100%;
    min-height: inherit;
    background-image: url(images/bg-auth.png);
    background-size: cover;
    background-position: center;
    @media (max-width: 576px) {
        background: ${colors.darkGrey};
    }
`;

const ContainerFlex = styled(Flex)`
    min-height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const StyledNotification = styled.div`
    background-color: #0066ff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: auto;
    color: black;
    line-height: 2.5;
    font-size: 1.5rem;
    text-align: center;
    animation: ${fade_in} 0.5s ease 1;
    .remove {
        position: absolute;
        bottom: 6px;
        right: 11px;
        color: ${colors.white};
        cursor: pointer;
    }
`;

const TextNotification = styled(Text)`
    margin: 1rem;
`;

const Logo = styled.img`
    width: 197px;
    height: auto;
    margin: 15px;
    margin-top: auto;
    @media (min-width: 1200px) {
        width: 278px;
    }
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const LinksFlex = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
`;

const StyledLinks = styled.a`
    p:hover {
        font-size: 17px;
        transition: 0.3s all;
    }
`;

const SocialMediaFlex = styled(Flex)`
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 1.5rem;
`;

const SocialMediaLinks = styled.img`
    height: 34px;
    width: 34px;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
        transition: 0.3s all;
    }
`;

const LinksText = styled(Text)`
    margin: auto;
`;

const StyledForm = styled(Form)`
    max-width: 334px;
    width: 100%;
    height: auto;
`;

const StyledFormItem = styled(Form.Item)`
    margin-bottom: 1.5rem;
`;

const ButtonSize = css`
    max-width: 334px;
    width: 100%;
    height: auto;
    margin-top: 1.5rem;
`;

const StyledButton = styled(FilledButton)`
    ${ButtonSize}
`;

const Login = () => {
    const [loginNotification, setLoginNotification] = useState('');
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoginNotification('');
        }, 3000);
        return () => clearTimeout(timer);
    }, [loginNotification]);

    const onSubmit = (values) => {
        if (values.email === user.email && values.password === user.password) {
            setLoginNotification('Регистрация прошла успешно!');
            setTimeout(() => {
                history.push(`/`);
            }, 2000);
        } else {
            setLoginNotification(
                'Пользователь с такими Email или паролем не найден!',
            );
        }
    };
    return (
        <AuthWrapper>
            <ContainerFlex>
                {loginNotification && (
                    <StyledNotification>
                        <TextNotification>{loginNotification}</TextNotification>
                        <div
                            className="remove"
                            onClick={(e) => setLoginNotification('')}
                        >
                            &times;
                        </div>
                    </StyledNotification>
                )}
                <Logo src={LogoSrc} />
                <StyledForm
                    name="login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onSubmit}
                >
                    <StyledFormItem
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Введите Email!',
                            },
                        ]}
                    >
                        <InputDesctop placeholder="Email" />
                    </StyledFormItem>
                    <StyledFormItem
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Введите Пароль!',
                            },
                        ]}
                    >
                        <InputDesctop type="password" placeholder="Пароль" />
                    </StyledFormItem>

                    <StyledFormItem>
                        <StyledButton
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Войти
                        </StyledButton>
                    </StyledFormItem>

                    <StyledFormItem>
                        <LinksFlex>
                            <StyledLinks
                                className="login-form-registration"
                                onClick={() => history.push('/registration')}
                            >
                                <LinksText>Создать аккаунт</LinksText>
                            </StyledLinks>
                            <StyledLinks
                                className="login-form-forgot"
                                onClick={() => history.push('/fogotpass')}
                            >
                                <LinksText>Забыли пароль?</LinksText>
                            </StyledLinks>
                        </LinksFlex>
                    </StyledFormItem>
                    <SocialMediaFlex>
                        <SocialMediaLinks src={GoogleIcon} />
                        <SocialMediaLinks src={FacebookIcon} />
                        <SocialMediaLinks src={VkIcon} />
                    </SocialMediaFlex>
                </StyledForm>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </AuthWrapper>
    );
};

export default Login;
