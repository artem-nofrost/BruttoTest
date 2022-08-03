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
    height: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    background-image: url(images/header-background.png);
    background-size: cover;
    background-position: center;
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

const StyledH1 = styled(H1)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const HeaderMenu = ({ headerText }) => {
    const [visible, setVisible] = useState(false);
    const history = useHistory();

    // const StyledMenu = styled(MainMenu)`

    // `;
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
                                <MainMenu
                                    items={topMenuItems}
                                    end={+true}
                                    mode="horizontal"
                                />
                            </TopMenuContainer>
                            <BottomMenuContainer>
                                <MainMenu items={menuItems} mode="horizontal" />
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
                                <MainMenu items={menuItems} mmode="vertical" />
                                <MainMenu
                                    items={topMenuItems}
                                    mode="vertical"
                                />
                            </StyledDrawer>
                        </StyledFlex>
                    </Col>
                </Row>
                <StyledH1>{headerText}</StyledH1>
            </MenuBar>
        </>
    );
};

export default HeaderMenu;