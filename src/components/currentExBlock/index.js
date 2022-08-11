/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { timeTable } from '../../server/timeTable';
import Text from '../../style/Text';

const CurrentExBlock = () => {
    const [currentEx, setCurrentEx] = useState({
        name: '',
    });
    const { week, day, block } = useParams();

    useEffect(() => {
        setCurrentEx(timeTable[week].days[day].blocks[block]);
    }, []);
    return <Text>{currentEx.name}</Text>;
};

export default CurrentExBlock;
