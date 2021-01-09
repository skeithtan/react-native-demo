import React, { useRef } from 'react';
import { View, Animated, PanResponder } from 'react-native';
import { styles } from './styles';

export function Cube() {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                {
                    toValue: { x: 0, y: 0 }, // Back to zero
                    useNativeDriver: false
                } 
            ).start();
        },
    });


    return (
        <View>
            <Animated.View
                style={[pan.getLayout(), styles.cube]}
                {...panResponder.panHandlers}
            />
        </View>
    )
}