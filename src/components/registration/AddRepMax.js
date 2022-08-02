/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IconAdd from '../../images/add.svg';
import { Row, Col, Select, Slider } from 'antd';
import { colors } from '../../style/colors';
import Text from '../../style/Text';

const { Option } = Select;

const RepMaxRow = styled(Row)`
    width: 100%;
    margin-bottom: 1rem;
    background: ${colors.grey};
    border-radius: 8px;
    cursor: pointer;
`;

const RepMaxParamsRow = styled(RepMaxRow)`
    margin-top: 2rem;
    padding: 1rem 0.5rem;
    cursor: default;
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

const RepMaxItem = styled(Col)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
`;

const RepMaxText = styled(Text)`
    margin: 1rem 0;
    color: #ffffffcc;
    font-weight: 500;
    font-size: 15px;
    line-height: 130%;
`;

const RepMaxItemIcon = styled.img`
    width: 22px;
    height: 22px;
    cursor: pointer;
`;

const RepMaxItemIconAdd = styled(RepMaxItemIcon)`
    cursor: pointer;
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
    margin-left: 1rem;
    margin-bottom: auto;
`;

const StyledRepMaxItem = styled(RepMaxItem)`
    padding-top: 7px;
`;

const StyledSelect = styled(Select)`
    width: 100%;
    padding-bottom: 1rem;
    .ant-select-selector {
        color: #121212 !important;
        font-weight: 600 !important;
        font-size: 15px !important;
        line-height: 20px !important;
        background: #ffffff !important;
        border: 0 !important;
        border-radius: 8px !important;
    }
`;

const AddRepMax = ({ onAdd, repMax }) => {
    const [isOpen, setOpen] = useState(false);
    const [currentRepMax, setCurrentRepMax] = useState({
        id: 0,
        name: '',
        units: '',
        value: '',
        max: 0,
        min: 0,
        defaultValue: 0,
    });
    const [value, setValue] = useState(0);

    useEffect(() => {
        setCurrentRepMax(repMax[0]);
    }, []);

    useEffect(() => {
        setValue(repMax[0].defaultValue);
    }, []);

    return (
        <>
            {!isOpen && (
                <RepMaxRow
                    onClick={(e) => {
                        setOpen(!isOpen);
                    }}
                >
                    <RepMaxItem xs={3}>
                        <RepMaxItemIcon src={IconAdd}></RepMaxItemIcon>
                    </RepMaxItem>
                    <RepMaxItem xs={21}>
                        <RepMaxText>Добавить</RepMaxText>
                    </RepMaxItem>
                </RepMaxRow>
            )}
            <RepMaxParamsRow className={isOpen ? 'active' : ''}>
                <RepMaxItem xs={24}>
                    <StyledSelect
                        defaultValue={repMax[0].name}
                        onChange={(e) => {
                            setCurrentRepMax(repMax[e - 1]);
                            setValue(repMax[e - 1].defaultValue);
                        }}
                    >
                        {repMax.map((item, id) => (
                            <Option key={item.id} value={item.engname}>
                                {item.name}
                            </Option>
                        ))}
                    </StyledSelect>
                </RepMaxItem>
                <StyledRepMaxItem xs={21}>
                    <StyledSlider
                        min={currentRepMax.min}
                        max={currentRepMax.max}
                        defaultValue={value}
                        value={value}
                        step={!currentRepMax.integer ? 0.5 : 1}
                        onChange={(value) => {
                            setValue(value);
                            setCurrentRepMax({
                                ...currentRepMax,
                                defaultValue: value,
                            });
                        }}
                    />
                    <TextUnits>
                        {value}({currentRepMax.units})
                    </TextUnits>
                </StyledRepMaxItem>
                <RepMaxItem xs={3}>
                    <RepMaxItemIconAdd
                        src={IconAdd}
                        onClick={(e) => {
                            setOpen(!isOpen);
                            onAdd(currentRepMax, value);
                        }}
                    ></RepMaxItemIconAdd>
                </RepMaxItem>
            </RepMaxParamsRow>
        </>
    );
};

export default AddRepMax;
