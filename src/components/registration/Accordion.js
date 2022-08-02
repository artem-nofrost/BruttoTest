/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import IconDelete from '../../images/delete.svg';
import IconArrow from '../../images/arrow.svg';
import FilledButton from '../../style/Button';
import styled from 'styled-components';
import Text from '../../style/Text';
import { Row, Col, Slider } from 'antd';
import { colors } from '../../style/colors';

const StyledButtonSave = styled(FilledButton)`
    width: 100%;
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    padding: 4px 15px;
`;

const RepMaxRow = styled(Row)`
    width: 100%;
    margin-bottom: 1rem;
    background: ${colors.grey};
    border-radius: 8px;
    cursor: pointer;
`;

const RepMaxRowChange = styled(RepMaxRow)`
    height: 0;
    opacity: 0;
    visibility: hidden;
    margin: 0;
    transition: 0.55s all;
    &.active {
        height: 100px;
        opacity: 1;
        visibility: visible;
        margin-bottom: 1rem;
    }
`;

const RepMaxRowAdded = styled(RepMaxRow)`
    cursor: default;
`;

const RepMaxItem = styled(Col)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
`;

const StyledRepMaxItem = styled(RepMaxItem)`
    padding: 2rem 1rem;
`;

const RepMaxItemResult = styled.div`
    width: 72px;
    padding: 0.5rem;
    background: ${colors.grey};
    color: #ffffffcc;
    text-align: center;
    border-radius: 8px;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
`;

const RepMaxItemIcon = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
`;

const Arrow = styled.img`
    cursor: pointer;
`;

const RepMaxText = styled(Text)`
    margin: 1rem 0;
    color: #ffffffcc;
    font-weight: 500;
    font-size: 15px;
    line-height: 130%;
`;

const StyledSlider = styled(Slider)`
    width: 100%;
    padding: 0;
    &:hover .ant-slider-track {
        background: #5e5e5e;
    }
    .ant-slider-rail,
    .ant-slider-track,
    .ant-slider-step {
        height: 8px;
        border-radius: 8px;
    }

    .ant-slider-rail {
        background: #ffffffcc;
    }

    .ant-slider-handle {
        width: 18px;
        height: 18px;
        border: 0;
    }

    .ant-slider-track {
        background: #5e5e5e;
    }
`;

const TextUnits = styled(Text)`
    width: 100px;
    margin-left: 1rem;
    margin-bottom: auto;
`;

const Accordion = ({ item, onDeleteRepMax, onChangeValue }) => {
    const [isOpen, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    useEffect(() => {
        setValue(item.value);
    }, []);

    return (
        <RepMaxRowAdded>
            <RepMaxItem xs={3}>
                <RepMaxItemIcon
                    onClick={(e) => onDeleteRepMax(item)}
                    src={IconDelete}
                ></RepMaxItemIcon>
            </RepMaxItem>
            <RepMaxItem xs={11}>
                <RepMaxText>{item.name}</RepMaxText>
            </RepMaxItem>
            <RepMaxItem xs={7}>
                <RepMaxItemResult>
                    {item.value} {item.units !== 'сек' && item.units}
                </RepMaxItemResult>
            </RepMaxItem>
            <RepMaxItem xs={3} onClick={() => setOpen(!isOpen)}>
                <RepMaxText>
                    <Arrow alt="" src={IconArrow} />
                </RepMaxText>
            </RepMaxItem>
            <RepMaxRowChange className={isOpen ? 'active' : ''}>
                <StyledRepMaxItem xs={23}>
                    <StyledSlider
                        defaultValue={item.value}
                        min={item.min}
                        max={item.max}
                        step={!item.integer ? 0.5 : 1}
                        onChange={(value) => setValue(value)}
                    />
                    <TextUnits>
                        {value}({item.units})
                    </TextUnits>
                </StyledRepMaxItem>
                <StyledButtonSave
                    onClick={(e) => {
                        onChangeValue(value, item);
                        setOpen(!isOpen);
                    }}
                >
                    Сохранить
                </StyledButtonSave>
            </RepMaxRowChange>
        </RepMaxRowAdded>
    );
};

export default Accordion;
