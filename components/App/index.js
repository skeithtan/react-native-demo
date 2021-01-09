import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Instructions } from '../Instructions';
import { Cube } from '../Cube';
import { styles } from './styles';
import { View } from 'react-native';

export function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Instructions/>
            <Cube />
        </View>
    );
}