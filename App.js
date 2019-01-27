import React, {  Component } from 'react';
import { AppRegistry,  Button, Platform, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Sound } from 'react-native';
import { Font } from 'expo';
import styles from './assets/styles';
import collection from './assets/index';


class BackgroundImage extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/7SYH.gif")}
        style={styles.backgroundImage}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}
class Mycomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.check
    };
  }
  displayText(){
    return {

    }
  }
  render() {
    return <Text>{this.props.check ? "oui":"non"}</Text>;
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

    prevGif = 0;

    Load_New_Image=()=>{

        let go = false;
        let centralOutcome = null;
        let buttonOutcome = null;
        let RandomNumber = null;

        while(!go){
            RandomNumber = Math.floor(Math.random() * collection.length) ;
            centralOutcome = collection[RandomNumber];
            buttonOutcome = collection[RandomNumber];

            console.log(RandomNumber);

            if(RandomNumber !== this.prevGif)
            {
                go = true;
            }
        }

        this.setState({
            currentCentralGif : centralOutcome,
            currentButtonPic: buttonOutcome
        });

        this.prevGif = RandomNumber;
    };


      constructor(props) {
        super(props);
        this.state = {
          text: "Clic !",
          backgroundColor: "#0F0",
          playing: false,
          currentCentralGif:  require('./assets/PeachKart.gif')
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
              <Image style={styles.bloc} source={require('./assets/cry.gif')}/>
            </TouchableOpacity>



            <View style={styles.character}>
                <Image style={styles.characterRender} source={ this.state.currentCentralGif }/>
            </View>
            </BackgroundImage>
          </View>
        );
      }
}

