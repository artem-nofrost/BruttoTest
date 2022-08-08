import { Col, Row, Tabs, Carousel } from 'antd';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { timeTable } from '../../server/timeTable';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import H1 from '../../style/H1';
import Text from '../../style/Text';
import HeaderMenu from '../header';

const { TabPane } = Tabs;

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

const StyledMainTabs = styled(Tabs)`
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
    @media (max-width: 576.5px) {
        display: none;
    }
    .ant-tabs-nav {
        margin-left: 200px;
        margin-bottom: 3rem;
        @media (max-width: 991.5px) {
            margin-left: 0;
        }
        &:before {
            border: 0;
        }
        .ant-tabs-nav-wrap {
            display: flex;
            justify-content: center;
            .ant-tabs-nav-list {
                gap: 3rem;
                @media (max-width: 991.5px) {
                    gap: 0 !important;
                }
                .ant-tabs-tab-btn {
                    color: #ffffff66;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 120%;
                }
                .ant-tabs-tab-active {
                    .ant-tabs-tab-btn {
                        color: ${colors.white};
                    }
                }
                .ant-tabs-ink-bar {
                    height: 4px;
                    background: white;
                }
            }
        }
    }
`;

const StyledTabPaneLeft = styled(TabPane)`
    .ant-tabs-nav {
        margin-left: 0;
        .ant-tabs-nav-list {
            margin-right: 13px;
            .ant-tabs-tab {
                position: relative;
                width: 187px;
                height: 128px;
                padding: 0;
                .ant-tabs-tab-btn {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    .left-tab-items {
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        border-radius: 8px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-shadow: 1px 2px 5px black;
                        filter: brightness(0.6);
                    }
                }
            }
            .ant-tabs-tab-active {
                .left-tab-items {
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 120%;

                    filter: none !important;
                }
            }
            .ant-tabs-ink-bar {
                width: 4px;
                right: -10px;
                background: white;
            }
        }
    }
    .ant-tabs-content-holder {
        border: 0;
    }
`;

const DataWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: ${colors.grey};
    border-radius: 8px;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

const StyledImage = styled.div`
    height: 184px;
    width: 296px;
    @media (max-width: 991.5px) {
        display: none;
    }
`;

const StyledRow = styled(Row)`
    min-width: 650px;
    max-width: 753px;
    padding-left: 3rem;
    padding-right: 3rem;
    @media (max-width: 991.5px) {
        min-width: auto;
    }
`;

const BottomText = styled(Text)`
    margin-top: auto;
    font-size: 12px;
    line-height: 16px;
`;

const StyledH1 = styled(H1)`
    text-align: start;
`;

const TextTitle = styled(Text)`
    text-align: start;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
`;
const TextDesc = styled(Text)`
    text-align: start;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
`;

// mobile
const StyledTabsMobile = styled.div`
    display: none;
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
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

const StyledCarouselMobile = styled(Carousel)`
    margin-top: 2rem;
    .slick-list {
        margin: 0 -10px;
        .slick-slide {
            height: 128px;
            text-align: center;
            overflow: hidden;
            user-select: none;
            cursor: pointer;
            > div {
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: red;
                margin: 0 10px;
                border-radius: 8px;
            }
            .wrapper-carousel-main-item {
                .carousel-main-item {
                    color: #ffffff66;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 120%;
                }
            }
        }
        .slick-current {
            .carousel-main-item {
                color: ${colors.white}!important;
            }
        }
    }
`;

const DataWrapperMobile = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    background: ${colors.grey};
    border-radius: 8px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const Program = () => {
    const [weekNumber, setWeekNumber] = useState(0);
    const [dayNumber, setDayNumber] = useState(0);
    const slider = useRef();

    return (
        <AuthWrapper>
            <ContainerFlex>
                <HeaderMenu headerText="Программа" />
                <StyledMainTabs tabPosition="top">
                    {timeTable.map((item, index) => (
                        <StyledTabPaneLeft
                            key={item.id}
                            tab={item.week}
                            bgImage={item.week}
                        >
                            <Tabs tabPosition="left">
                                {item.days.map((i, index) => (
                                    <TabPane
                                        key={i.id}
                                        tab={
                                            <div
                                                className="left-tab-items"
                                                style={{
                                                    background: `url(images/program_day_${i.id}.png)`,
                                                }}
                                            >
                                                {i.name}
                                            </div>
                                        }
                                    >
                                        <DataWrapper>
                                            <StyledRow>
                                                <Col xs={24} lg={12}>
                                                    <StyledImage
                                                        style={{
                                                            background: `url(images/program_day_${i.id}.png)`,
                                                        }}
                                                    />
                                                </Col>
                                                <Col xs={24} lg={12}>
                                                    <StyledH1>
                                                        {i.name}
                                                    </StyledH1>
                                                    <TextDesc>
                                                        {i.desc}
                                                    </TextDesc>
                                                    <TextTitle>МФР:</TextTitle>
                                                    <TextDesc>{i.mfr}</TextDesc>
                                                    <TextTitle>
                                                        Спец разминка:
                                                    </TextTitle>
                                                    <TextDesc>
                                                        {i.specWarmUp}
                                                    </TextDesc>
                                                    <TextTitle>
                                                        Техническая часть:
                                                    </TextTitle>
                                                    <TextDesc>
                                                        {i.tech}
                                                    </TextDesc>
                                                    <TextTitle>
                                                        Кондиционная часть:
                                                    </TextTitle>
                                                    <TextDesc>
                                                        {i.condPart}
                                                    </TextDesc>
                                                </Col>
                                            </StyledRow>
                                        </DataWrapper>
                                    </TabPane>
                                ))}
                            </Tabs>
                        </StyledTabPaneLeft>
                    ))}
                </StyledMainTabs>
                <StyledTabsMobile>
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
                                    slidesToShow: 1,
                                },
                            },
                        ]}
                        beforeChange={(current, next) => {
                            if (current !== next) {
                                setWeekNumber(next);
                                setDayNumber(0);
                                slider.current.goTo(0);
                            }
                        }}
                    >
                        {timeTable.map((item, index) => (
                            <div key={item.id}>
                                <div className="carousel-main-item">
                                    {item.week}
                                </div>
                            </div>
                        ))}
                    </StyledCarouselMainMobile>
                    <StyledCarouselMobile
                        ref={(ref) => {
                            slider.current = ref;
                        }}
                        slidesToShow={3}
                        dots={false}
                        draggable={true}
                        swipeToSlide={true}
                        touchThreshold={50}
                        focusOnSelect={true}
                        responsive={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                },
                            },
                        ]}
                        beforeChange={(current, next) => {
                            if (current !== next) {
                                setDayNumber(next);
                            }
                        }}
                    >
                        {timeTable[weekNumber].days.map((i, index) => (
                            <div
                                key={i.id}
                                className="wrapper-carousel-main-item"
                            >
                                <div className="carousel-main-item">
                                    {i.name}
                                </div>
                            </div>
                        ))}
                    </StyledCarouselMobile>
                    <DataWrapperMobile>
                        <Row>
                            <Col xs={24}>
                                <StyledH1>
                                    {timeTable[weekNumber].days[dayNumber].name}
                                </StyledH1>
                                <TextDesc>
                                    {timeTable[weekNumber].days[dayNumber].desc}
                                </TextDesc>
                                <TextTitle>МФР:</TextTitle>
                                <TextDesc>
                                    {timeTable[weekNumber].days[dayNumber].mfr}
                                </TextDesc>
                                <TextTitle>Спец разминка:</TextTitle>
                                <TextDesc>
                                    {
                                        timeTable[weekNumber].days[dayNumber]
                                            .specWarmUp
                                    }
                                </TextDesc>
                                <TextTitle>Техническая часть:</TextTitle>
                                <TextDesc>
                                    {timeTable[weekNumber].days[dayNumber].tech}
                                </TextDesc>
                                <TextTitle>Кондиционная часть:</TextTitle>
                                <TextDesc>
                                    {
                                        timeTable[weekNumber].days[dayNumber]
                                            .condPart
                                    }
                                </TextDesc>
                            </Col>
                        </Row>
                    </DataWrapperMobile>
                </StyledTabsMobile>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </AuthWrapper>
    );
};

export default Program;
