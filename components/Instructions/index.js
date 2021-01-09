import React from 'react';
import { View, Text, Image } from 'react-native';
import { ArrowDownImage } from '../../images';
import { styles } from './styles';

export function Instructions() {
    return (
        <View>
            <Text style={styles.text}>This is a cube. Drag it around!</Text>
            <Image style={styles.arrow} source={ArrowDownImage}/>
        </View>
    )
}