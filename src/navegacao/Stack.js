import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="TelaC"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="TelaA"
                options={{ title: "Titulo da tela A" }}
            >
                {(props) => (
                    <PassoStack {...props} avancar="TelaC" voltar={true}>
                        <TelaA />
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen
                name="TelaB"
                options={{ title: "Titulo da tela B" }}
            >
                {(props) => (
                    <PassoStack {...props} avancar="TelaA" voltar={true}>
                        <TelaB />
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen
                name="TelaC"
                options={{ title: "Titulo da tela C" }}
            >
                {(props) => (
                    <PassoStack {...props} avancar="TelaB" voltar={true}>
                        <TelaC />
                    </PassoStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default StackNavigator;
