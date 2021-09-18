import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './Stack';

const Navegacao = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navegacao;
