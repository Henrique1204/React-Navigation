import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#666',
            headerShown: false,
            tabBarLabelStyle: { fontSize: 30 }
        }}>
            <Tab.Screen name="TelaA" component={TelaA} />
            <Tab.Screen name="TelaB" component={TelaB} />
            <Tab.Screen name="TelaC" component={TelaC} />
        </Tab.Navigator>
    );
};

export default Tabs;
