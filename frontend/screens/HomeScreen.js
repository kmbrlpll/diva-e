import React, {Component } from "react";
import { View, Image, Text, StyleSheet, Button, ImageBackground } from "react-native";
import {Dimensions} from 'react-native';

import Error from "../components/Error.js";
import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper.js';


class HomeScreen extends Component {
  render(){
    return(
	  <ImageBackground source = {require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
      	<View style = {styles.container}>
        <Image source={require('../assets/logoiot.jpg')} style={styles.image} >
        </Image>
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
  },
  image: {
    width: widthPercentageToDP('60%'),
    height: widthPercentageToDP('60%'),
    justifyContent: 'center',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,

  }
});
