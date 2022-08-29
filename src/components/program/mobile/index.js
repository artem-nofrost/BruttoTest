import { Col, Row, Carousel, Collapse } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { timeTable } from '../../../server/timeTable';
import FilledButton from '../../../style/Button';
import { colors } from '../../../style/colors';
import Text from '../../../style/Text';
import Blocks from '../Blocks';

const { Panel } = Collapse;

const StyledContainerMobile = styled.div`
    display: none;
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (max-width: 576.5px) {
        display: block;
    }
`;

const StyledCarouselMainMobile = styled(Carousel)`
    .slick-slide {
        height: 48px;
        text-align: center;
        overflow: hidden;
        user-select: none;
        cursor: pointer;
        .carousel-main-item {
            color: #ffffff66;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 120%;
        }
    }
    .slick-current {
        .carousel-main-item {
            color: ${colors.white};
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 120%;
            padding-bottom: 1rem;
            border-bottom: 4px solid white;
        }
    }
`;

const CollapseMobile = styled(Collapse)`
    width: calc(100% + 3rem);
    background: transparent;
    margin-top: 2rem;
    margin-left: -1.5rem;
    border: 0;
    border-radius: 8px;
    .ant-collapse-item {
        position: relative;
        background: ${colors.grey};
        margin-bottom: 1rem;
        border: 0;
        &:after {
            content: '';
            height: 0%;
            transition: all 1s ease;
        }
        .ant-collapse-content {
            background: transparent;
            margin: 0 4rem;
            border: 0;
            .ant-collapse {
                margin-left: -20px !important;
                margin-top: 0;
            }
        }
        .ant-collapse-expand-icon {
            order: 1;
            align-self: center;
            span {
                color: #ffffffcc;
                margin-right: 0 !important;
                font-size: 20px !important;
            }
        }
    }
    .ant-collapse-item-active {
        &:after {
            content: '';
            height: 100%;
            width: 3px;
            position: absolute;
            left: 0;
            top: 0;

            background-color: ${colors.white};
        }
    }
    .ant-collapse-item-disabled {
        .ant-item-image {
            filter: brightness(0.4);
        }
        p {
            color: #ffffff4d;
        }
        .ant-collapse-expand-icon {
            span {
                color: transparent;
            }
        }
    }
    .ant-panel-today {
        .ant-collapse-header {
            background: ${colors.white};
            .ant-item-image {
                &:after {
                    content: 'Сегодня';
                    position: absolute;
                    height: 32px;
                    width: 109px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #121212cc;
                    color: ${colors.white};
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    font-weight: 700;
                    font-size: 17px;
                    line-height: 130%;
                }
            }
            p {
                color: ${colors.darkGrey};
            }
            .ant-collapse-expand-icon {
                order: 1;
                align-self: center;
                span {
                    color: #000000d9;
                    font-size: 20px;
                }
            }
        }
    }
    .disabled {
        .ant-collapse-header {
            .ant-item-image {
                filter: brightness(0.6);
            }
            p {
                color: #ffffff4d;
            }
            .ant-collapse-expand-icon {
                span {
                    color: #ffffff4d;
                }
            }
        }
    }
    .ant-collapse-extra {
        width: 100%;
        margin-left: 0 !important;
    }
`;

const StyledRowMobile = styled(Row)`
    @media (max-width: 350.5px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImageMobile = styled.div`
    width: 109px;
    height: 106px;
    border-radius: 8px;
`;

const TextWeekMobile = styled(Text)`
    margin-bottom: 8px;
    text-align: start;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    @media (max-width: 350.5px) {
        margin-top: 2rem;
        text-align: center;
    }
`;

const TextDescMobile = styled(Text)`
    color: #ffffffcc;
    text-align: start;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    @media (max-width: 350.5px) {
        text-align: center;
    }
`;

const CollapseExMobile = styled(CollapseMobile)`
    border: 0;
    background: ${colors.darkGrey};
    .ant-collapse-header {
        background: ${colors.grey}!important;
        padding: 0 !important;
        cursor: pointer !important;
        .ant-collapse-expand-icon {
            display: none;
        }
        p {
            color: #ffffffcc !important;
        }
    }
    .ant-item-ex-image {
        filter: none;
    }
    .disabled-ex {
        .ant-collapse-header {
            .ant-item-image {
                filter: brightness(0.4) !important;
            }
            p {
                color: #ffffff4d !important;
            }
        }
    }
    .ant-current {
        background: ${colors.white};
        .ant-item-ex-image {
            &:after {
                content: 'Текущий';
                position: absolute;
                height: 32px;
                width: 109px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #121212cc;
                color: ${colors.white};
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                font-weight: 700;
                font-size: 17px;
                line-height: 130%;
            }
        }
        p {
            color: ${colors.darkGrey}!important;
        }
    }
`;

const StyledFilledButton = styled(FilledButton)`
    height: fit-content;
    max-width: 100%;
    padding: 1rem 2rem;
    margin: 1.5rem auto 0 auto !important;
`;

const Index = ({ weekNumber, setWeekNumber }) => {
    const [dayNumberActive, setDayNumberActive] = useState(null);

    return (
        <StyledContainerMobile>
            <StyledCarouselMainMobile
                slidesToShow={3}
                dots={false}
                draggable={true}
                swipeToSlide={true}
                touchThreshold={50}
                focusOnSelect={true}
                responsive={[
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                ]}
                beforeChange={(current, next) => {
                    if (current !== next) {
                        setWeekNumber(next);
                        setDayNumberActive(null);
                    }
                }}
            >
                {timeTable.map((item, index) => (
                    <div key={item.id}>
                        <div className="carousel-main-item">{item.week}</div>
                    </div>
                ))}
            </StyledCarouselMainMobile>
            <CollapseMobile
                accordion
                activeKey={[dayNumberActive]}
                onChange={(key) => {
                    key !== undefined
                        ? setDayNumberActive(key.toString())
                        : setDayNumberActive(null);
                }}
            >
                {timeTable[weekNumber].days.map((i, index) => (
                    <Panel
                        key={i.id.toString()}
                        showArrow={true}
                        className={
                            (i.isToday && 'ant-panel-today') ||
                            (i.finished && 'disabled')
                        }
                        extra={
                            <StyledRowMobile>
                                <Col xs={10}>
                                    <StyledImageMobile
                                        className="ant-item-image"
                                        style={{
                                            background: `url(/images/program_day_${i.id}.png)`,
                                        }}
                                    />
                                </Col>
                                <Col xs={14}>
                                    <Row>
                                        <Col xs={24}>
                                            <TextWeekMobile>
                                                {i.name}
                                            </TextWeekMobile>
                                        </Col>
                                        <Col xs={24}>
                                            <TextDescMobile>
                                                {i.desc}
                                            </TextDescMobile>
                                        </Col>
                                    </Row>
                                </Col>
                            </StyledRowMobile>
                        }
                    >
                        <CollapseExMobile accordion collapsible="disabled">
                            {i.blocks.map((j, index) => (
                                <Blocks
                                    key={j.id}
                                    weekNumber={weekNumber}
                                    i={i}
                                    j={j}
                                />
                            ))}
                        </CollapseExMobile>
                        {i.isToday && (
                            <StyledFilledButton>
                                Завершить тренировку
                            </StyledFilledButton>
                        )}
                    </Panel>
                ))}
            </CollapseMobile>
        </StyledContainerMobile>
    );
};

export default Index;
