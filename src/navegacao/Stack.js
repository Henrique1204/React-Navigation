import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaC"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="TelaA"
                component={TelaA}
                options={{ title: "Titulo da tela A" }}
            />

            <Stack.Screen
                name="TelaB"
                component={TelaB}
                options={{ title: "Titulo da tela B" }}
            />

            <Stack.Screen
                name="TelaC"
                component={TelaC}
                options={{ title: "Titulo da tela C" }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
