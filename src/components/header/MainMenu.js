import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import { useHistory } from 'react-router-dom';

const StyledMenu = styled(Menu)`
    width: 100%;
    background: transparent;
    margin: 1rem auto;
    border: 0;
    color: ${(props) => (props.end ? colors.white : '#ffffff66')};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    justify-content: ${(props) =>
        props.end ? 'flex-end' : 'flex-start'}!important;
    li {
        &:hover {
            color: ${(props) =>
                props.end ? '#ffffff66' : colors.white}!important;
        }
        &:after {
            border: 0 !important;
        }
    }
    @media (max-width: 767px) {
        display: none;
    }
`;

const MainMenu = ({ items, end, mode }) => {
    const history = useHistory();

    return (
        <>
            <StyledMenu
                items={items}
                end={end}
                onClick={(event) => {
                    history.push('/' + event.key);
                }}
                mode={mode}
            />
        </>
    );
};

export default MainMenu;
