import React, { Component } from "react";
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from "react-native";
import { Font } from "expo";

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

export default class FlatListBasics extends Component {
  render() {
    var bonjour = "hello worl";

    return (
      <View style={{paddingTop: 50}}>
        <Mycomponent text={bonjour}
        check={
          false
        } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 2,
    width: null,
    height: null,
    resizeMode: "cover"
  },

  text: {
    width: "auto",
    height: 50,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },

  bottomView: {
    width: "100%",
    height: "25%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },

  textStyle: {
    color: "#fff",
    fontSize: 45
  },

  container: {
    paddingTop: 22
  },
  RichText: {
    fontSize: 22,
    height: 50,
    backgroundColor: "#BADA55",
    borderWidth: 1,
    borderColor: "#333"
  }
});
