import React from 'react';
import { View, Button } from 'react-native';

import TextoCentral from '../components/TextoCentral';

const TelaD = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        navigation.openDrawer();

                        setTimeout(() => {
                            navigation.closeDrawer();

                            setInterval(navigation.toggleDrawer, 1000);
                        }, 3000);
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral fundo='#33F27D' corTexto='#222'>Tala D</TextoCentral>
            </View>
        </View>
    );
};

export default TelaD;
