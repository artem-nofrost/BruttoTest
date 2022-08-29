import { Col, Collapse, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../../style/Text';

const { Panel } = Collapse;

const StyledRowEx = styled(Row)`
    padding: 2rem;
    @media (max-width: 430.5px) {
        .ant-item-ex-image {
            width: 76px;
            height: 70px;
            &:after {
                width: 76px !important;
            }
        }
    }
    @media (max-width: 360.5px) {
        flex-direction: column;
        align-items: center;
        .ant-text-week {
            margin-top: 2rem;
            text-align: center;
        }
        .ant-text-desc {
            text-align: center;
        }
    }
    @media (max-width: 350.5px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImage = styled.div`
    width: 109px;
    height: 106px;
    border-radius: 8px;
    @media (max-width: 650.5px) {
        width: 86px;
        height: 80px;
    }
`;

const TextWeek = styled(Text)`
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

const TextDesc = styled(Text)`
    color: #ffffffcc;
    text-align: start;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    @media (max-width: 320.5px) {
        text-align: center;
    }
`;

const Blocks = ({ weekNumber, i, j }) => {
    const history = useHistory();
    return (
        <Panel
            className={
                (j.finished && 'disabled-ex') || (j.current && 'ant-current')
            }
            extra={
                <StyledRowEx
                    onClick={() => {
                        history.push({
                            pathname:
                                '/program/' +
                                weekNumber +
                                '/' +
                                i.id +
                                '/' +
                                j.id,
                        });
                    }}
                >
                    <Col xs={10}>
                        <StyledImage
                            className="ant-item-ex-image"
                            style={{
                                background: `url(/images/program_day_${j.id}.png)`,
                            }}
                        />
                    </Col>
                    <Col xs={14}>
                        <Row>
                            <Col xs={24}>
                                <TextWeek className="ant-text-week">
                                    {j.name}
                                </TextWeek>
                            </Col>
                            <Col xs={24}>
                                <TextDesc className="ant-text-desc">
                                    {j.exercises.map(
                                        (k, index) =>
                                            (index ? ', ' : '') + k.name,
                                    )}
                                </TextDesc>
                            </Col>
                        </Row>
                    </Col>
                </StyledRowEx>
            }
        ></Panel>
    );
};

export default Blocks;
