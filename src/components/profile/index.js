import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import Text from '../../style/Text';
import HeaderMenu from '../header';
import IconArrow from '../../images/arrow.svg';
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
    // margin-top: -2.5rem;
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

const UserImage = styled.div`
    position: relative;
    width: 109px;
    height: 109px;
    background-image: url(/images/avatar_image.png);
    margin: auto;
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

const ChangeProfileIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background: url(/images/change-profile.svg);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`;

const TextName = styled(Text)`
    margin: 1rem auto;
    color: #ffffffcc;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

const SmallText = styled(Text)`
    margin: 1rem auto;
    color: #ffffff4d;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
`;

const BlockWrapper = styled.div`
    background: ${colors.grey};
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0.5rem;
`;

const StyledBlockWrapper = styled(BlockWrapper)`
    cursor: pointer;
`;

const HugeText = styled(Text)`
    margin-bottom: 6px;
    color: #ffffffcc;
    font-weight: 700;
    font-size: 22px;
    line-height: 130%;
`;

const ArchiText = styled(Text)`
    color: #ffffff4d;
    font-weight: 700;
    font-size: 13px;
    line-height: 130%;
`;

const TextLink = styled.div`
    margin-top: 1rem;
    color: ${colors.white};
    font-weight: 500;
    font-size: 17px;
    line-height: 130%;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
        color: ${colors.darkWhite};
    }
`;

const StyledColEnd = styled(Col)`
    text-align: end;
`;

const TextTitle = styled(Text)`
    margin: 1rem auto;
    text-align: start;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

const TextBlock = styled(Text)`
    margin-bottom: 0;
    color: #ffffffcc;
    font-weight: 600;
    font-size: 17px;
    line-height: 130%;
`;

const StyledTextBlock = styled(TextBlock)`
    text-align: start;
`;

const Arrow = styled.img`
    position: absolute;
    top: 29px;
    right: 18px;
    transition: 0.3s all;
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const Profile = () => {
    const history = useHistory();
    return (
        <ProfileWrapper>
            <ContainerFlex>
                <HeaderMenu headerText="Профиль" />
                <StyledRowContainer>
                    <StyledRow>
                        <Col xs={24}>
                            <UserImage></UserImage>
                            <ChangeProfileIcon
                                onClick={() => history.push('/profile/change')}
                            ></ChangeProfileIcon>
                        </Col>
                        <Col xs={24}>
                            <TextName>Николай Балалаев</TextName>
                        </Col>
                        <Col xs={24}>
                            <SmallText>
                                У меня большой опыт в кроссфите, буду рад помочь
                                новичкам советом. Также я люблю рыбалку и
                                фотографию
                            </SmallText>
                        </Col>
                        <Col xs={24}>
                            <StyledRow>
                                <Col xs={8}>
                                    <BlockWrapper>
                                        <HugeText>12</HugeText>
                                        <ArchiText>Марафонов</ArchiText>
                                    </BlockWrapper>
                                </Col>
                                <Col xs={8}>
                                    <BlockWrapper>
                                        <HugeText>267</HugeText>
                                        <ArchiText>Тренировок</ArchiText>
                                    </BlockWrapper>
                                </Col>
                                <Col xs={8}>
                                    <BlockWrapper>
                                        <HugeText>50</HugeText>
                                        <ArchiText>Челленджей</ArchiText>
                                    </BlockWrapper>
                                </Col>
                            </StyledRow>
                        </Col>
                        <Col xs={24}>
                            <StyledRow>
                                <Col xs={12}>
                                    <TextLink>Все достижения</TextLink>
                                </Col>
                                <StyledColEnd xs={12}>
                                    <TextLink>Ваш лидерборд</TextLink>
                                </StyledColEnd>
                            </StyledRow>
                        </Col>
                    </StyledRow>
                </StyledRowContainer>
                <StyledRowContainer>
                    <StyledRow>
                        <Col xs={24}>
                            <TextTitle>Ваши сообщества</TextTitle>
                        </Col>
                        <Col xs={24}>
                            <BlockWrapper>
                                <TextBlock>Brutto official</TextBlock>
                            </BlockWrapper>
                        </Col>
                        <Col xs={24}>
                            <BlockWrapper>
                                <TextBlock>Moscow Сrossfit</TextBlock>
                            </BlockWrapper>
                        </Col>
                        <Col xs={24}>
                            <BlockWrapper>
                                <TextBlock>Правильное питание</TextBlock>
                            </BlockWrapper>
                        </Col>
                        <StyledColEnd xs={24}>
                            <TextLink>Больше сообществ</TextLink>
                        </StyledColEnd>
                    </StyledRow>
                </StyledRowContainer>
                <StyledRowContainer>
                    <StyledRow>
                        <Col xs={24}>
                            <TextTitle>Настройки</TextTitle>
                        </Col>
                        <Col xs={24}>
                            <StyledBlockWrapper
                                onClick={() => history.push('/trainsettings')}
                            >
                                <StyledTextBlock>
                                    Настройки тренировки
                                </StyledTextBlock>
                                <Arrow src={IconArrow} />
                            </StyledBlockWrapper>
                        </Col>
                        <Col xs={24}>
                            <StyledBlockWrapper
                                onClick={() => history.push('/faq')}
                            >
                                <StyledTextBlock>FAQ</StyledTextBlock>
                                <Arrow src={IconArrow} />
                            </StyledBlockWrapper>
                        </Col>
                        <Col xs={24}>
                            <StyledBlockWrapper
                                onClick={() => history.push('/chat')}
                            >
                                <StyledTextBlock>
                                    Обратная связь
                                </StyledTextBlock>
                                <Arrow src={IconArrow} />
                            </StyledBlockWrapper>
                        </Col>
                    </StyledRow>
                </StyledRowContainer>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </ProfileWrapper>
    );
};

export default Profile;
