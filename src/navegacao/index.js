import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './Stack';
import TabsNavigator from './Tabs';
import DrawerNavigator from './Drawer';

const Navegacao = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default Navegacao;
