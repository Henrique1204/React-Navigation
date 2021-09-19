import React from 'react';
import TextoCentral from '../components/TextoCentral';

const TelaC = ({ route }) => {
    const numero = route.params?.numero || 0;

    return <TextoCentral fundo='#9932CD'>Tala C - {numero}</TextoCentral>;
};

export default TelaC;
