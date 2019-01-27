import { AppRegistry,  Button, Platform, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Sound } from 'react-native';

styles = StyleSheet.create({
    backgroundImage: {
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    touchableImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: -100,
    },

    bloc: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    leftTopItem: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    rightTopItem: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    character: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: -200,
    },

    characterRender: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
    },

    text: {
        width: 'auto',
        height: 50,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    bottomView:{
        width: '100%',
        height: '25%',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    textStyle:{
        color: '#fff',
        fontSize:45
    },

    container: {
        flex: 1,
        paddingTop: 22
    },
});

export default styles;