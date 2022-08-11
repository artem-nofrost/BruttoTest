import { Col, Row } from 'antd';
import React from 'react';
import FilledButton from '../../style/Button';
import Text from '../../style/Text';

const CurrentDayExBlock = () => {
    return (
        <Row>
            <Col xs={4}>
                <FilledButton>Назад</FilledButton>
            </Col>
            <Col xs={20}>Блок1</Col>
            <Col xs={24}>
                <Text>Описание</Text>
            </Col>
            <Col xs={24}>
                <Text>
                    В этом блоке вам предстоит как следует разогреть мышцы и
                    прийти в тонус, не торопитесь, но постарайтесь уложиться в
                    15 минут.
                </Text>
            </Col>
            <Col xs={24}>
                <Text>Упражнения в блоке</Text>
            </Col>
            <Col xs={24}>
                <Text>Последовательность</Text>
            </Col>
            <Col xs={24}>
                <FilledButton>Старт</FilledButton>
            </Col>
        </Row>
    );
};

export default CurrentDayExBlock;
