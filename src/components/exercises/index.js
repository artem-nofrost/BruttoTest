/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row, Collapse } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArrowSrc from '../../images/arrow-back.svg';
import { timeTable } from '../../server/timeTable';
import FilledButton from '../../style/Button';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import Text from '../../style/Text';
import HeaderMenu from '../header';

const { Panel } = Collapse;

const AuthWrapper = styled.div`
    width: 100%;
    min-height: inherit;
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

const StyledRow = styled(Row)`
    margin-top: -2.5rem;
`;

const StyledRowContainer = styled(StyledRow)`
    max-width: 1100px;
`;

const StyledRowWidth = styled(Row)`
    width: 100%;
`;

const ColWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.grey};
    margin-top: 1rem;
    padding: 2rem 2rem;
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

const TextCaption = styled(Text)`
    text-align: left;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;

const TextDesc = styled(Text)`
    text-align: left;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
`;

const StyledCollapse = styled(Collapse)`
    background: transparent;
    border: 0;
    .ant-collapse-item {
        border: 0;
        .ant-collapse-header {
            justify-content: space-between;
            padding: 0 !important;
            padding-bottom: 2rem !important;
            .ant-collapse-expand-icon {
                order: 1;
                align-self: center;
                span {
                    color: #ffffffcc;
                    margin-right: 0 !important;
                    font-size: 20px !important;
                }
            }
            .ant-collapse-header-text {
                color: ${colors.white};
                font-weight: 500;
                font-size: 22px;
                line-height: 130%;
            }
        }
        .ant-collapse-content {
            width: calc(100% + 4rem);
            margin-left: -2rem;
            background: transparent;
            border: 0;
            .ant-collapse-content-box {
                padding: 16px 0;
            }
        }
    }
`;

const WrapperVideo = styled.div`
    background: transparent;
`;

const VideoPreview = styled.div`
    width: 109px;
    height: 64px;
    background: url(/images/video_1.svg);
    border-radius: 8px;
    &:after {
        content: url(/images/video-play.svg);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 1s ease;
    }
`;

const ColWrapperVideo = styled(ColWrapper)`
    align-items: flex-start;
    cursor: pointer;
`;

const StyledTextDesc = styled(TextDesc)`
    margin-left: 1rem;
`;

const StyledFilledButton = styled(FilledButton)`
    padding: 2rem 1rem;
    width: 95%;
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const OrderText = styled(Text)`
    text-align: start;
    color: #ffffffcc;
    font-weight: 500;
    font-size: 19px;
    line-height: 130%;
`;

const StyledOrderText = styled(OrderText)`
    text-align: center;
`;

const OrderWrapper = styled.div`
    background: ${colors.grey};
    border-radius: 8px;
    color: #ffffffcc;
    margin-bottom: 1rem;
    padding: 0.5rem;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    line-height: 130%;
`;

const StyledOrderRow = styled(Row)`
    gap: 1.5rem;
`;

const Exercises = () => {
    const [data, setData] = useState({
        name: '',
        desc: '',
        exercises: [],
        currentBlock: false,
    });

    const myRef = useRef();

    const history = useHistory();
    const { week, date, block } = useParams();

    useEffect(() => {
        setData(timeTable[week].days[date].blocks[block]);
    }, []);

    useEffect(() => {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [data]);

    return (
        <AuthWrapper>
            <ContainerFlex>
                <HeaderMenu headerText="Программа" />
                <StyledRowContainer>
                    <ColWrapper ref={myRef} xs={24}>
                        <Arrow
                            src={ArrowSrc}
                            onClick={() => history.goBack()}
                        />
                        <Col xs={19}>
                            <TextTitle>{data.name}</TextTitle>
                        </Col>
                    </ColWrapper>

                    <ColWrapper xs={24}>
                        <Row>
                            <Col xs={24}>
                                <TextCaption>Описание</TextCaption>
                            </Col>
                            <Col xs={24}>
                                <TextDesc>{data.desc}</TextDesc>
                            </Col>
                        </Row>
                    </ColWrapper>
                    <ColWrapper xs={24}>
                        <StyledRowWidth>
                            <Col xs={24}>
                                <StyledCollapse defaultActiveKey={['1']}>
                                    <Panel header="Упражнения в блоке" key="1">
                                        {data.exercises.map((i, index) => (
                                            <WrapperVideo key={index}>
                                                <Row>
                                                    <ColWrapperVideo>
                                                        <VideoPreview />
                                                        <StyledRowWidth>
                                                            <Col xs={15}>
                                                                <StyledTextDesc>
                                                                    {
                                                                        i.nameExercises
                                                                    }
                                                                </StyledTextDesc>
                                                            </Col>
                                                        </StyledRowWidth>
                                                    </ColWrapperVideo>
                                                </Row>
                                            </WrapperVideo>
                                        ))}
                                    </Panel>
                                </StyledCollapse>
                            </Col>
                        </StyledRowWidth>
                    </ColWrapper>
                    <ColWrapper xs={24}>
                        <StyledRowWidth>
                            <Col xs={24}>
                                <TextCaption>Последовательность</TextCaption>
                            </Col>
                            <Col xs={24}>
                                <StyledOrderRow>
                                    <Col xs={24}>
                                        <OrderText>Тяга к подбородку</OrderText>
                                    </Col>
                                    <Col xs={11}>
                                        <OrderWrapper>x2</OrderWrapper>
                                    </Col>
                                    <Col xs={11}>
                                        <OrderWrapper>50+5%</OrderWrapper>
                                    </Col>
                                    <Col xs={24}>
                                        <OrderText>Взятие в стойку</OrderText>
                                    </Col>
                                    <Col xs={11}>
                                        <OrderWrapper>x1</OrderWrapper>
                                    </Col>
                                    <Col xs={11}>
                                        <OrderWrapper>50+5%</OrderWrapper>
                                    </Col>
                                    <Col xs={24}>
                                        <OrderText>
                                            Пуловер обратным хватом
                                        </OrderText>
                                    </Col>
                                    <Col xs={11}>
                                        <OrderWrapper>20 сек</OrderWrapper>
                                    </Col>
                                    <Col xs={24}>
                                        <OrderText>Отдых</OrderText>
                                    </Col>
                                    <Col xs={24}>
                                        <OrderWrapper>1 мин</OrderWrapper>
                                    </Col>
                                    <Col xs={24}>
                                        <StyledOrderText>
                                            Повторить 5 раз
                                        </StyledOrderText>
                                    </Col>
                                </StyledOrderRow>
                            </Col>
                        </StyledRowWidth>
                    </ColWrapper>
                    {data.current && (
                        <ColWrapper>
                            <StyledFilledButton>Старт</StyledFilledButton>
                        </ColWrapper>
                    )}
                </StyledRowContainer>

                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </AuthWrapper>
    );
};

export default Exercises;
