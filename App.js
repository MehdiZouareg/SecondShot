import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Font } from 'expo';

class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground source={require('./assets/7SYH.gif')}
                  style={styles.backgroundImage}>
                  {this.props.children}
            </ImageBackground>
        )
    }
}

export default class FlatListBasics extends Component {
  componentDidMount() {
      Font.loadAsync({
        'geek': require('./assets/fonts/geek.ttf'),
      });
    }

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage>
        <View style={ styles.bottomView} >
              <Text style={styles.textStyle}>AWESOME</Text>
       </View>
        </BackgroundImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'cover'
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
