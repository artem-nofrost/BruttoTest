import { Col, Row, Collapse } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ArrowSrc from '../../images/arrow-back.svg';
import FilledButton from '../../style/Button';
import { colors } from '../../style/colors';
import Text from '../../style/Text';

const { Panel } = Collapse;

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
    background: url(images/video_1.svg);
    border-radius: 8px;
    &:after {
        content: url(images/video-play.svg);
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

const CurrentDayExBlock = ({
    setIsVisibleExBlock,
    currentExBlockData: data,
}) => {
    return (
        <StyledRowContainer>
            <ColWrapper xs={24}>
                <Arrow
                    src={ArrowSrc}
                    onClick={() => setIsVisibleExBlock(false)}
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
                                                            {i.nameExercises}
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
                        <TextDesc>Инпуты с данными</TextDesc>
                    </Col>
                </StyledRowWidth>
            </ColWrapper>
            {data.currentBlock && (
                <ColWrapper>
                    <StyledFilledButton>Старт</StyledFilledButton>
                </ColWrapper>
            )}
        </StyledRowContainer>
    );
};

export default CurrentDayExBlock;
