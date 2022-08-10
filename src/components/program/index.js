import { Col, Row, Tabs, Carousel, Collapse } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { timeTable } from '../../server/timeTable';
import FilledButton from '../../style/Button';
import { colors } from '../../style/colors';
import Flex from '../../style/Flex';
import H1 from '../../style/H1';
import Text from '../../style/Text';
import HeaderMenu from '../header';

const { TabPane } = Tabs;
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
        background: ${colors.grey};
        margin-bottom: 1rem;
        border-bottom: 1px solid #d9d9d9;
        border: 0;
        .ant-collapse-content {
            background: ${colors.darkGrey};
            border-bottom: 1px solid #d9d9d9;
            .ant-collapse {
                margin-left: -20px !important;
                margin-top: 0;
                // border-bottom: 1px solid #d9d9d9;
            }
        }
    }
    .ant-collapse-item-disabled {
        .ant-item-image {
            filter: brightness(0.4);
        }
        p {
            color: #ffffff4d;
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
        }
    }
    .ant-collapse-extra {
        width: 100%;
        margin-left: 0 !important;
    }
`;

const StyledRowMobile = styled(Row)`
    @media (max-width: 320.5px) {
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
    @media (max-width: 320.5px) {
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
    @media (max-width: 320.5px) {
        text-align: center;
    }
`;

const CollapseExMobile = styled(CollapseMobile)`
    border: 0;
    background: ${colors.darkGrey};
    .ant-collapse-header {
        background: ${colors.grey}!important;
        padding: 2rem !important;
        cursor: pointer !important;
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
    padding: 2rem 1rem;
    max-width: 100%;
    margin: 1.5rem auto 0 auto !important;
`;

// const StyledCarouselMobile = styled(Carousel)`
//     margin-top: 2rem;
//     .slick-list {
//         margin: 0 -10px;
//         .slick-slide {
//             height: 128px;
//             text-align: center;
//             overflow: hidden;
//             user-select: none;
//             cursor: pointer;
//             > div {
//                 height: 100%;
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 background: red;
//                 margin: 0 10px;
//                 border-radius: 8px;
//             }
//             .wrapper-carousel-main-item {
//                 .carousel-main-item {
//                     color: #ffffff66;
//                     font-style: normal;
//                     font-weight: 500;
//                     font-size: 20px;
//                     line-height: 120%;
//                 }
//             }
//         }
//         .slick-current {
//             .carousel-main-item {
//                 color: ${colors.white}!important;
//             }
//         }
//     }
// `;

// const DataWrapperMobile = styled.div`
//     margin-top: 2rem;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-direction: row;
//     background: ${colors.grey};
//     border-radius: 8px;
//     padding-top: 3rem;
//     padding-bottom: 3rem;
//     padding-left: 2rem;
//     padding-right: 2rem;
// `;

const Program = () => {
    const [weekNumber, setWeekNumber] = useState(0);
    const [dayNumberActive, setDayNumberActive] = useState(null);

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
                                <div className="carousel-main-item">
                                    {item.week}
                                </div>
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
                                showArrow={false}
                                collapsible={i.finished && 'disabled'}
                                className={i.isToday && 'ant-panel-today'}
                                extra={
                                    <StyledRowMobile>
                                        <Col xs={10}>
                                            <StyledImageMobile
                                                className="ant-item-image"
                                                style={{
                                                    background: `url(images/program_day_${i.id}.png)`,
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
                                <CollapseExMobile
                                    accordion
                                    collapsible="disabled"
                                >
                                    {i.blocks.map((j, index) => (
                                        <Panel
                                            key={j.id.toString()}
                                            className={
                                                (j.finished && 'disabled-ex') ||
                                                (j.current && 'ant-current')
                                            }
                                            extra={
                                                <StyledRowMobile>
                                                    <Col xs={10}>
                                                        <StyledImageMobile
                                                            className="ant-item-ex-image"
                                                            style={{
                                                                background: `url(images/program_day_${j.id}.png)`,
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col xs={14}>
                                                        <Row>
                                                            <Col xs={24}>
                                                                <TextWeekMobile>
                                                                    {j.name}
                                                                </TextWeekMobile>
                                                            </Col>
                                                            <Col xs={24}>
                                                                <TextDescMobile>
                                                                    {j.exercises.map(
                                                                        (
                                                                            k,
                                                                            index,
                                                                        ) =>
                                                                            (index
                                                                                ? ', '
                                                                                : '') +
                                                                            k.name,
                                                                    )}
                                                                </TextDescMobile>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </StyledRowMobile>
                                            }
                                        ></Panel>
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
                </StyledTabsMobile>
                <BottomText>2022 Brutto team</BottomText>
            </ContainerFlex>
        </AuthWrapper>
    );
};

export default Program;

// {
/* <StyledCarouselMobile
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
                    </StyledCarouselMobile> */
// }

// <Row>
//                             <Col xs={24}>
//                                 <StyledH1>
//                                     {timeTable[weekNumber].days[dayNumber].name}
//                                 </StyledH1>
//                                 <TextDesc>
//                                     {timeTable[weekNumber].days[dayNumber].desc}
//                                 </TextDesc>
//                                 <TextTitle>МФР:</TextTitle>
//                                 <TextDesc>
//                                     {timeTable[weekNumber].days[dayNumber].mfr}
//                                 </TextDesc>
//                                 <TextTitle>Спец разминка:</TextTitle>
//                                 <TextDesc>
//                                     {
//                                         timeTable[weekNumber].days[dayNumber]
//                                             .specWarmUp
//                                     }
//                                 </TextDesc>
//                                 <TextTitle>Техническая часть:</TextTitle>
//                                 <TextDesc>
//                                     {timeTable[weekNumber].days[dayNumber].tech}
//                                 </TextDesc>
//                                 <TextTitle>Кондиционная часть:</TextTitle>
//                                 <TextDesc>
//                                     {
//                                         timeTable[weekNumber].days[dayNumber]
//                                             .condPart
//                                     }
//                                 </TextDesc>
//                             </Col>
//                         </Row>
