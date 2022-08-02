import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Drawer, Button } from 'antd';
import MainMenu from './MainMenu';
import Flex from '../../style/Flex';
import LogoSrc from '../../images/logo.png';
import { useHistory } from 'react-router-dom';
import { colors } from '../../style/colors';
import H1 from '../../style/H1';

const topMenuItems = [
    {
        key: 'profile',
        label: 'Профиль',
    },
    {
        key: 'faq',
        label: 'FAQ',
    },
    {
        key: 'feedback',
        label: 'Обратная связь',
    },
    {
        key: 'logout',
        label: 'Выйти',
    },
];

const menuItems = [
    {
        key: 'program',
        label: 'Программа',
    },
    {
        key: 'trains',
        label: 'Тренировки',
    },
    {
        key: 'practice',
        label: 'Упражнения',
    },
    {
        key: 'liders',
        label: 'Лидеры',
    },
];

const MenuBar = styled.nav`
    width: 100%;
    padding: 0 20px;
`;

const Logo = styled.img`
    width: 96px;
    height: auto;
    margin: 2rem auto;
    cursor: pointer;
`;

const StyledFlex = styled(Flex)`
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-width: 767px) {    
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
}
`;

const TopMenuContainer = styled(Flex)`
    justify-content: flex-end;
    li {
        &:active {
            background: none;
        }
    }
`;

const BottomMenuContainer = styled(Flex)`
    li {
        &:active {
            background: none;
        }
    }
`;

const BarsMenu = styled(Button)`
    display: none;
    justify-content: center;
    align-items: center;
    border: 0;
    height: 32px;
    padding: 13px;
    margin-top: 8px;
    background: none;
    transition: outline 0.6s linear;
    &:hover,
    :focus {
        outline: auto;
        background: transparent;
    }
    &:active {
        outline: auto !important;
        background: transparent;
    }
    @media (max-width: 767px) {
        display: flex;
    }
`;

const BarsButton = styled.span`
    position: relative;
    display: block;
    width: 28px;
    height: 2px;
    background: ${colors.white};
    &:before,
    :after {
        content: attr(x);
        width: 28px;
        position: absolute;
        top: -10px;
        left: 0;
        height: 2px;
        background: ${colors.white};
    }
    &:after {
        top: auto;
        bottom: -10px;
    }
`;

const StyledDrawer = styled(Drawer)`
    ul {
        display: flex;
        flex-direction: column;
        li {
            color: black;
            &:hover {
                color: #363636 !important;
            }
        }
    }
`;

const HeaderMenu = ({ headerText }) => {
    const [visible, setVisible] = useState(false);
    const history = useHistory();

    const StyledMenu = styled(MainMenu)``;
    return (
        <>
            <MenuBar>
                <Row>
                    <Col xs={{ span: 5, order: 2 }} md={{ order: 1 }}>
                        <Logo src={LogoSrc} onClick={() => history.push('/')} />
                    </Col>
                    <Col xs={{ span: 19, order: 1 }} md={{ order: 2 }}>
                        <StyledFlex>
                            <TopMenuContainer>
                                <StyledMenu
                                    items={topMenuItems}
                                    end={+true}
                                    mode="horizontal"
                                />
                            </TopMenuContainer>
                            <BottomMenuContainer>
                                <StyledMenu
                                    items={menuItems}
                                    mode="horizontal"
                                />
                            </BottomMenuContainer>
                            <BarsMenu
                                className="barsMenu"
                                type="primary"
                                onClick={() => setVisible(true)}
                            >
                                <BarsButton />
                            </BarsMenu>
                            <StyledDrawer
                                placement="left"
                                closable={false}
                                onClose={() => setVisible(false)}
                                visible={visible}
                            >
                                <StyledMenu
                                    items={menuItems}
                                    mmode="vertical"
                                />
                                <StyledMenu
                                    items={topMenuItems}
                                    mode="vertical"
                                />
                            </StyledDrawer>
                        </StyledFlex>
                    </Col>
                </Row>
                <H1>{headerText}</H1>
            </MenuBar>
        </>
    );
};

export default HeaderMenu;
