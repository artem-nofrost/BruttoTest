import React, { useState } from 'react';
import { Tabs, Collapse } from 'antd';
import styled from 'styled-components';
import { timeTable } from '../../../server/timeTable';
import { colors } from '../../../style/colors';
import Blocks from '../Blocks';

const { TabPane } = Tabs;

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
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 8px;
                        text-shadow: 1px 2px 5px black;
                        filter: brightness(0.6);
                    }
                    .today {
                        &:after {
                            content: 'Сегодня';
                            position: absolute;
                            top: 0;
                            height: 32px;
                            width: 100%;
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

const CollapseEx = styled(Collapse)`
    border: 0;
    background: ${colors.darkGrey};
    .ant-collapse-item {
        border: 0;
        margin-bottom: 1rem;
        .ant-collapse-header {
            background: ${colors.grey}!important;
            padding: 0 !important;
            cursor: pointer !important;
            .ant-collapse-extra {
                margin-left: 0;
            }
            .ant-collapse-expand-icon {
                display: none;
            }
            p {
                color: #ffffffcc;
            }
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

const Index = ({ weekNumber }) => {
    const [activeDay, setActiveDay] = useState('2');

    return (
        <StyledMainTabs tabPosition="top">
            {timeTable.map((item, index) => (
                <StyledTabPaneLeft
                    key={item.id}
                    tab={item.week}
                    bgImage={item.week}
                >
                    <Tabs tabPosition="left" defaultActiveKey={activeDay}>
                        {item.days.map((i, index) => {
                            return (
                                <TabPane
                                    key={i.id}
                                    tab={
                                        <div
                                            className={
                                                i.isToday
                                                    ? 'left-tab-items today'
                                                    : 'left-tab-items'
                                            }
                                            style={{
                                                background: `url(/images/program_day_${i.id}.png)`,
                                                backgroundSize: 'cover',
                                            }}
                                        >
                                            {i.name}
                                        </div>
                                    }
                                >
                                    <CollapseEx
                                        accordion
                                        collapsible="disabled"
                                    >
                                        {i.blocks.map((j, index) => (
                                            <Blocks
                                                key={j.id}
                                                weekNumber={weekNumber}
                                                i={i}
                                                j={j}
                                            />
                                        ))}
                                    </CollapseEx>
                                </TabPane>
                            );
                        })}
                    </Tabs>
                </StyledTabPaneLeft>
            ))}
        </StyledMainTabs>
    );
};

export default Index;
