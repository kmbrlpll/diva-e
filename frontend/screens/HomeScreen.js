import React, {Component } from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";

import Error from "../components/Error.js";


class HomeScreen extends Component {
  render(){
    return(
	  <ImageBackground source = {require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      	<View style = {styles.container}>
			<Text>Home Screen</Text>
		</View>
	  </ImageBackground>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
