import React, {Component } from "react";
import { View, Text , StyleSheet , Image} from "react-native";
import {PulseIndicator} from 'react-native-indicators';

function OnOffIndicator (props) {
	const red = '#FF3333';
	return(
		<View 
        style={styles.dot} 
        left= {(props.windowData.x / props.imageDimensions.x * 100).toString() + "%"} 
        top = {(props.windowData.y / props.imageDimensions.y * 100).toString() + "%"}>
        	<Image source={require('../assets/lock.png')} style={styles.image} resizeMode = 'stretch'/>
	   </View>
	)
}

export default OnOffIndicator;

const styles = StyleSheet.create({
	dot: {
	    position:'absolute',
	    marginTop: -12,
	    marginLeft: -12,
	    flex: 1,
 	},
 	image: {
    width: 24, 
    height: 24,
  }
});