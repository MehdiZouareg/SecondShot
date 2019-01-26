import React, {  Component } from 'react';
import { AppRegistry,  Button, Platform, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Sound } from 'react-native';
import { Font } from 'expo';
import collection from './assets/index';

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

class FallingObject extends Component {

    render() {
        return (
            <ImageBackground source={require('./assets/7SYH.gif')}
                  style={styles.backgroundImage}>
                  {this.props.children}
            </ImageBackground>
        )
    }
}


export default class App extends Component {


    Load_New_Image=()=>{

        let RandomNumber = Math.floor(Math.random() * 100) + 1 ;
        let outcome = collection[Math.floor(Math.random(RandomNumber))];

        console.log(outcome);
        this.setState({

            currentGif :  require('./assets/MarioKart.gif')

        });
    };


      constructor(props) {
        super(props);
        this.state = {
          text: "Clic !",
          backgroundColor: "#0F0",
          playing: false,
          currentGif:  require('./assets/PeachKart.gif')
        }
      }

      componentDidMount() {
          Font.loadAsync({
            'geek': require('./assets/fonts/geek.ttf'),
          });
        }


      render() {
        return (
          <View style={styles.container}>
            <BackgroundImage>
            <TouchableOpacity style={styles.touchableImage} onPress={() => {
                this.Load_New_Image();
                }
              }>
              <Image style={styles.bloc} source={require('./assets/Bloc.png')}/>
            </TouchableOpacity>
            <View style={styles.character}>
                <Image style={styles.characterRender} source={ this.state.currentGif }/>
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

    touchableImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'contain',
      marginTop: -100,
    },

    bloc: {
      width: 80,
      height: 80,
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
