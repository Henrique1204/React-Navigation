import React from 'react';
import { View, Button } from 'react-native';

const PassoStack = ({ children, avancar, voltar, navigation }) => {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                { voltar && navigation?.navigate && (
                    <Button
                        title="Voltar"
                        onPress={() => navigation.goBack()}
                    />
                ) }

                { avancar && navigation?.navigate && (
                    <Button
                        title="Avançar"
                        onPress={() => navigation.push(avancar, {
                            numero: Math.round(Math.random() * 100)
                        })}
                    />
                ) }
            </View>

            <View style={{ flex: 1 }}>
                {children}
            </View>
        </>
    );
};

export default PassoStack;
