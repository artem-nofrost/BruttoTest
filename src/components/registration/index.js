import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Flex from '../../style/Flex';
import LogoSrc from '../../images/logo.png';
import GoogleIcon from '../../images/google-icon.svg';
import FacebookIcon from '../../images/facebook-icon.svg';
import VkIcon from '../../images/vk-icon.svg';
import { useHistory } from 'react-router-dom';
import { colors } from '../../style/colors';
import Text from '../../style/Text';
import { Badge, Form, InputNumber, Radio } from 'antd';
import InputDesctop from '../../style/Input';
import { userData } from '../../server/user';
import { fade_in } from '../../style/animations';
import H1 from '../../style/H1';
import ClassicInput from '../../style/ClassicInput';
import ButtonOutline from '../../style/ButtonOutline';
import FilledButton from '../../style/Button';
import Accordion from './Accordion';
import AddRepMax from './AddRepMax';
import { repMax } from '../../server/repMax';

const AuthWrapper = styled.div`
    width: 100%;
    min-height: inherit;
    background-image: ${(props) =>
        props.part1 ? 'url(images/bg-auth.png);' : 'none'};
    background-size: cover;
    background-position: center;
    @media (max-width: 576.5px) {
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
    padding-top: 3rem;
    @media (min-width: 1200.5px) {
        width: 278px;
    }
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const RegLinkFlex = styled(Flex)`
    flex-direction: row;
    justify-content: center;
`;

const StyledRegText = styled(Text)`
    margin-right: 5px;
`;

const StyledRegLink = styled.a`
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

const StyledButtonOutline = styled(ButtonOutline)`
    ${ButtonSize}
`;

const TextTitle = styled(H1)`
    margin-top: auto;
    padding-top: 3rem;
    font-weight: 700;
    font-size: 34px;
    line-height: 23px;
`;

const StyledRadioGroup = styled(Radio.Group)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.grey};
    border-radius: 8px;
`;

const StyledRadioButton = styled(Radio.Button)`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    background: none !important;
    padding: 1.5rem 2rem !important;
    color: ${colors.white} !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 13px !important;
    line-height: 20px !important;
    border: 0 !important;
    border-color: ${colors.grey}!important;
    border-radius: 8px !important;
    &:hover {
        color: ${colors.darkGrey}!important;
        background: ${colors.white}!important;
    }
    &::before {
        width: 0 !important;
    }
    &.ant-radio-button-wrapper-checked {
        color: ${colors.darkGrey}!important;
        background: ${colors.white}!important;
    }
`;

const StyledInputNumber = styled(InputNumber)`
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
    &.ant-input-number-focused {
        box-shadow: 0 0 0 #80bdff00 !important;
    }
`;

const TextNote = styled(Text)`
    color: #ffffffcc;
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
`;

const FlexBadge = styled(Flex)`
    justify-content: center;
`;

const StyledBadge = styled(Badge)`
    cursor: pointer;
    &.active .ant-badge-status-default {
        background-color: ${colors.white};
    }
    .ant-badge-status-default {
        background-color: #ffffff4d;
    }
    &:hover .ant-badge-status-default {
        background-color: ${colors.white};
        transition: 0.3s all;
    }
`;

const HeightWeightFlex = styled(Flex)`
    justufy-content: center;
    gap: 8px;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const StyledFormItemRow = styled(Form.Item)`
    width: 100%;
    .ant-input-number {
        width: 100%;
    }
`;

const TextSubTitle = styled(Text)`
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

const RepMaxFlex = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Registration = () => {
    const [regNotification, setRegNotification] = useState('');
    const [part, setPart] = useState(1);
    const [user, setUser] = useState({
        email: '',
        password: '',
        personalData: { name: '', surname: '', gender: '', age: '' },
        personalParams: {
            height: '',
            weight: '',
            level: '',
            repmax: [
                {
                    id: 0,
                    name: 'Взятие в стойку',
                    engname: 'racking',
                    units: 'кг',
                    value: '109',
                    max: 150,
                    min: 10,
                },
            ],
        },
    });

    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            setRegNotification('');
        }, 3000);
        return () => clearTimeout(timer);
    }, [regNotification]);

    const onSubmit = (values) => {
        if (values.email === userData.email) {
            setRegNotification('Пользователь с таких Email уже существует!');
        } else {
            localStorage.email = userData.email;
            localStorage.password = userData.password;
            setTimeout(() => {
                setPart(2);
            }, 2500);
            setRegNotification('Успешная регистрация! Заполним личные данные!');
        }
    };

    const onUpdatePersonalData = (values) => {
        // отправка обновлённых данных на сервер
    };

    const onUpdatePersonalParams = (values) => {
        // отправка обновлённых данных на сервер
        history.push('/');
    };

    const onDeleteRepMax = (item) => {
        let newArray = user.personalParams.repmax.filter(
            (i, index) => i.id !== item.id,
        );
        setUser({
            ...user,
            personalParams: {
                ...user.personalParams,
                repmax: newArray,
            },
        });
    };

    const onChangeValue = (value, item) => {
        const newArray = user.personalParams.repmax.map((i, index) => {
            if (i.id === item.id) {
                return { ...i, value: value };
            }
            return i;
        });
        setUser({
            ...user,
            personalParams: {
                ...user.personalParams,
                repmax: newArray,
            },
        });
    };

    const onAdd = (currentRepMax, value) => {
        setUser({
            ...user,
            personalParams: {
                ...user.personalParams,
                repmax: [
                    ...user.personalParams.repmax,
                    { ...currentRepMax, value: value },
                ],
            },
        });
    };

    return (
        <>
            {part === 1 && (
                <AuthWrapper part1>
                    <ContainerFlex>
                        {regNotification && (
                            <StyledNotification>
                                <TextNotification>
                                    {regNotification}
                                </TextNotification>
                                <div
                                    className="remove"
                                    onClick={(e) => setRegNotification('')}
                                >
                                    &times;
                                </div>
                            </StyledNotification>
                        )}
                        <Logo src={LogoSrc} />
                        <StyledForm
                            name="registration"
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
                                value={user.email}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        email: e.target.value.trim(),
                                    })
                                }
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
                                value={user.password}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        password: e.target.value.trim(),
                                    })
                                }
                            >
                                <InputDesctop
                                    type="password"
                                    placeholder="Пароль"
                                />
                            </StyledFormItem>

                            <StyledFormItem>
                                <StyledButton
                                    htmlType="submit"
                                    className="reg-form-button"
                                >
                                    Продолжить
                                </StyledButton>
                            </StyledFormItem>

                            <StyledFormItem>
                                <RegLinkFlex>
                                    <StyledRegText>
                                        Уже есть аккаунт?
                                    </StyledRegText>
                                    <StyledRegLink
                                        className="reg-form-registration"
                                        onClick={() => history.push('/login')}
                                    >
                                        <LinksText>Войти</LinksText>
                                    </StyledRegLink>
                                </RegLinkFlex>
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
            )}
            {part === 2 && (
                <AuthWrapper>
                    <ContainerFlex>
                        <TextTitle>Личные данные</TextTitle>
                        <StyledForm
                            name="registration"
                            layout="vertical"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onUpdatePersonalParams}
                        >
                            <StyledFormItem label="Имя" name="name">
                                <ClassicInput
                                    value={user.personalData.name}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            personalData: {
                                                ...user.personalData,
                                                name: e.target.value.trim(),
                                            },
                                        })
                                    }
                                />
                            </StyledFormItem>
                            <StyledFormItem label="Фамилия" name="surname">
                                <ClassicInput
                                    value={user.personalData.surname}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            personalData: {
                                                ...user.personalData,
                                                surname: e.target.value.trim(),
                                            },
                                        })
                                    }
                                />
                            </StyledFormItem>

                            <Form.Item name="gender" label="Пол">
                                <StyledRadioGroup>
                                    <StyledRadioButton
                                        value="male"
                                        checked={
                                            user.personalData.gender === 'Male'
                                        }
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalData: {
                                                    ...user.personalData,
                                                    gender: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        Мужской
                                    </StyledRadioButton>
                                    <StyledRadioButton
                                        value="female"
                                        checked={
                                            user.personalData.gender ===
                                            'Female'
                                        }
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalData: {
                                                    ...user.personalData,
                                                    gender: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        Женский
                                    </StyledRadioButton>
                                </StyledRadioGroup>
                            </Form.Item>

                            <Form.Item name="age" label="Возраст">
                                <StyledInputNumber
                                    min={1}
                                    max={99}
                                    value={user.personalData.age}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            personalData: {
                                                ...user.personalData,
                                                age: e,
                                            },
                                        })
                                    }
                                />
                            </Form.Item>

                            <StyledFormItem>
                                <StyledButton
                                    onClick={() => setPart(3)}
                                    htmlType="submit"
                                    className="reg-form-button"
                                >
                                    Далее
                                </StyledButton>
                            </StyledFormItem>
                            <StyledButtonOutline
                                onClick={() => history.push('/')}
                            >
                                Заполнить позже
                            </StyledButtonOutline>
                            <TextNote>
                                Вы можете заполнить эти данные из своего профиля
                            </TextNote>
                            <FlexBadge>
                                <StyledBadge
                                    className="active"
                                    status="default"
                                />
                                <StyledBadge
                                    onClick={() => setPart(3)}
                                    status="default"
                                />
                            </FlexBadge>
                        </StyledForm>
                        <BottomText>2022 Brutto team</BottomText>
                    </ContainerFlex>
                </AuthWrapper>
            )}
            {part === 3 && (
                <AuthWrapper>
                    <ContainerFlex>
                        <TextTitle>Ваши параметры</TextTitle>
                        <StyledForm
                            name="registration"
                            layout="vertical"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onUpdatePersonalData}
                        >
                            <HeightWeightFlex>
                                <StyledFormItemRow label="Рост" name="height">
                                    <StyledInputNumber
                                        min={50}
                                        max={230}
                                        value={user.personalParams.height}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalParams: {
                                                    ...user.personalParams,
                                                    height: e,
                                                },
                                            })
                                        }
                                    />
                                </StyledFormItemRow>
                                <StyledFormItemRow label="Вес" name="weight">
                                    <StyledInputNumber
                                        min={20}
                                        max={300}
                                        value={user.personalParams.weight}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalParams: {
                                                    ...user.personalParams,
                                                    weight: e,
                                                },
                                            })
                                        }
                                    />
                                </StyledFormItemRow>
                            </HeightWeightFlex>

                            <Form.Item name="level" label="Ваш уровень">
                                <StyledRadioGroup>
                                    <StyledRadioButton
                                        value="beginner"
                                        checked={
                                            user.personalParams.level ===
                                            'Beginner'
                                        }
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalParams: {
                                                    ...user.personalParams,
                                                    level: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        Новичок
                                    </StyledRadioButton>
                                    <StyledRadioButton
                                        value="inter"
                                        checked={
                                            user.personalParams.level ===
                                            'Inter'
                                        }
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalParams: {
                                                    ...user.personalParams,
                                                    level: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        Средний
                                    </StyledRadioButton>
                                    <StyledRadioButton
                                        value="profi"
                                        checked={
                                            user.personalParams.level ===
                                            'Profi'
                                        }
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                personalParams: {
                                                    ...user.personalParams,
                                                    level: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        Профи
                                    </StyledRadioButton>
                                </StyledRadioGroup>
                            </Form.Item>

                            <TextSubTitle>Повторный максимум</TextSubTitle>

                            <RepMaxFlex>
                                {user.personalParams.repmax.map((item, id) => (
                                    <Accordion
                                        key={item.id}
                                        item={item}
                                        onDeleteRepMax={onDeleteRepMax}
                                        onChangeValue={onChangeValue}
                                    />
                                ))}

                                <AddRepMax onAdd={onAdd} repMax={repMax} />
                            </RepMaxFlex>

                            <StyledFormItem>
                                <StyledButton
                                    htmlType="submit"
                                    className="reg-form-button"
                                    onClick={() => history.push('/program')}
                                >
                                    Завершить
                                </StyledButton>
                            </StyledFormItem>

                            <FlexBadge>
                                <StyledBadge
                                    onClick={() => setPart(2)}
                                    status="default"
                                />
                                <StyledBadge
                                    className="active"
                                    status="default"
                                />
                            </FlexBadge>
                        </StyledForm>
                        <BottomText>2022 Brutto team</BottomText>
                    </ContainerFlex>
                </AuthWrapper>
            )}
        </>
    );
};

export default Registration;
