import React from 'react';
import { View, Text } from 'react-native';

const TextoCentral = ({ children, fundo, corTexto }) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: fundo || '#222'
        }}>
            <Text style={{ fontSize: 50, color: corTexto || '#EEE' }}>{children}</Text>
        </View>
    );
};

export default TextoCentral;
