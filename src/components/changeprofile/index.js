import React, { useState } from 'react';
import { Col, Row, Form, Radio, InputNumber } from 'antd';
import styled, { css } from 'styled-components';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import Text from '../../style/Text';
import HeaderMenu from '../header';
import ArrowSrc from '../../images/arrow-back.svg';
import ClassicInput from '../../style/ClassicInput';
import FilledButton from '../../style/Button';
import { useHistory } from 'react-router-dom';

const ProfileWrapper = styled.div`
    width: 100%;
    min-height: inherit;
    background: ${colors.darkGrey};
`;

const ContainerFlex = styled(Flex)`
    min-height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

const StyledRow = styled(Row)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const StyledRowContainer = styled(StyledRow)`
    max-width: 1100px;
    width: 100%;
    justify-content: center;
    background: ${colors.grey};
    padding: 2rem 16px;
`;

const Arrow = styled.img`
    position: relative;
    left: -9%;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        transform: scale(1.2);
    }
`;

const TextTitle = styled(Text)`
    margin-bottom: 0;
    padding-right: 1rem;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
`;

const UserImage = styled.div`
    position: relative;
    width: 109px;
    height: 109px;
    background-image: url(/images/avatar_image.png);
    margin: auto;
    margin-bottom: 2rem;
    pointer-events: none;
    &:after {
        content: url(/images/plus.svg);
        position: absolute;
        bottom: 0;
        right: 0;
        pointer-events: all;
        transition: all 0.3s;
        cursor: pointer;
    }
    &:hover::after {
        transform: scale(1.2);
    }
`;

const StyledForm = styled(Form)`
    width: 100%;
    height: auto;
`;

const StyledFormItem = styled(Form.Item)`
    margin-bottom: 1.5rem;
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

const ButtonSize = css`
    max-width: 576px;
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: 1.5rem;
`;

const StyledButton = styled(FilledButton)`
    ${ButtonSize}
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const ChangeProfile = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        personalData: { name: '', surname: '', gender: '', age: '' },
        personalParams: {
            level: '',
            aboutMe: '',
        },
    });

    const history = useHistory();

    const onSubmit = (values) => {
        history.push('/profile');
        // изменяем данные
    };

    return (
        <ProfileWrapper>
            <ContainerFlex>
                <HeaderMenu headerText="Профиль" />
                <StyledRowContainer>
                    <Arrow src={ArrowSrc} onClick={() => history.goBack()} />
                    <Col xs={19}>
                        <TextTitle>Редактирование профиля</TextTitle>
                    </Col>
                </StyledRowContainer>
                <StyledRowContainer>
                    <Col xs={24}>
                        <UserImage></UserImage>
                    </Col>
                    <Col xs={24}>
                        <StyledForm
                            name="changeprofile"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onSubmit}
                        >
                            <StyledRow gutter={{ xs: 0, sm: 32 }}>
                                <Col xs={24} sm={12}>
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
                                </Col>
                                <Col xs={24} sm={12}>
                                    <StyledFormItem
                                        label="Фамилия"
                                        name="surname"
                                    >
                                        <ClassicInput
                                            value={user.personalData.surname}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    personalData: {
                                                        ...user.personalData,
                                                        surname:
                                                            e.target.value.trim(),
                                                    },
                                                })
                                            }
                                        />
                                    </StyledFormItem>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item name="gender" label="Пол">
                                        <StyledRadioGroup>
                                            <StyledRadioButton
                                                value="male"
                                                checked={
                                                    user.personalData.gender ===
                                                    'Male'
                                                }
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        personalData: {
                                                            ...user.personalData,
                                                            gender: e.target
                                                                .value,
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
                                                            gender: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            >
                                                Женский
                                            </StyledRadioButton>
                                        </StyledRadioGroup>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
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
                                </Col>
                                <Col xs={24}>
                                    <Form.Item name="level" label="Ваш уровень">
                                        <StyledRadioGroup>
                                            <StyledRadioButton
                                                value="beginner"
                                                checked={
                                                    user.personalParams
                                                        .level === 'Beginner'
                                                }
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        personalParams: {
                                                            ...user.personalParams,
                                                            level: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            >
                                                Новичок
                                            </StyledRadioButton>
                                            <StyledRadioButton
                                                value="inter"
                                                checked={
                                                    user.personalParams
                                                        .level === 'Inter'
                                                }
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        personalParams: {
                                                            ...user.personalParams,
                                                            level: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            >
                                                Средний
                                            </StyledRadioButton>
                                            <StyledRadioButton
                                                value="profi"
                                                checked={
                                                    user.personalParams
                                                        .level === 'Profi'
                                                }
                                                onChange={(e) =>
                                                    setUser({
                                                        ...user,
                                                        personalParams: {
                                                            ...user.personalParams,
                                                            level: e.target
                                                                .value,
                                                        },
                                                    })
                                                }
                                            >
                                                Профи
                                            </StyledRadioButton>
                                        </StyledRadioGroup>
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <StyledFormItem
                                        label="О себе"
                                        name="aboutme"
                                    >
                                        <ClassicInput
                                            value={user.personalParams.aboutMe}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    personalData: {
                                                        ...user.personalParams,
                                                        aboutMe:
                                                            e.target.value.trim(),
                                                    },
                                                })
                                            }
                                        />
                                    </StyledFormItem>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <StyledFormItem label="Email" name="email">
                                        <ClassicInput
                                            value={user.email}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    email: e.target.value.trim(),
                                                })
                                            }
                                        />
                                    </StyledFormItem>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <StyledFormItem
                                        label="Пароль"
                                        name="password"
                                    >
                                        <ClassicInput
                                            value={user.password}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    password:
                                                        e.target.value.trim(),
                                                })
                                            }
                                        />
                                    </StyledFormItem>
                                </Col>
                                <Col xs={24}>
                                    <StyledFormItem>
                                        <StyledButton
                                            htmlType="submit"
                                            className="reg-form-button"
                                        >
                                            Изменить
                                        </StyledButton>
                                    </StyledFormItem>
                                </Col>
                            </StyledRow>
                        </StyledForm>
                    </Col>
                </StyledRowContainer>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </ProfileWrapper>
    );
};

export default ChangeProfile;
