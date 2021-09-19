import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './Stack';
import TabsNavigator from './Tabs';

const Navegacao = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <TabsNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navegacao;
