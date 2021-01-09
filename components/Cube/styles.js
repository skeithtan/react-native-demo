import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cube: {
        backgroundColor: "rgba(97, 159, 155, 1)",
        width: 80,
        height: 80,
        borderRadius: 16,

        //Shadows
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 7,
    }
});