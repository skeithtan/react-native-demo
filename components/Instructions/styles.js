import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        height: 48,
        width: 48,
        resizeMode: 'contain',
        display: 'flex',
        marginTop: 16,
        marginBottom: 32,
        alignSelf: 'center'
    },
    text: {
        color: "rgb(160,160,160)",
        fontSize: 20
    }
});