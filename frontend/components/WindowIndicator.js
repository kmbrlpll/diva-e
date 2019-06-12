import React, {Component } from "react";
import { View, Text , StyleSheet } from "react-native";
import {PulseIndicator} from 'react-native-indicators';

function WindowIndicator (props) {
	const red = '#FF3333';
	return(
		<View 
        style={styles.dot} 
        left= {(props.windowData.x / props.imageDimensions.x * 100).toString() + "%"} 
        top = {(props.windowData.y / props.imageDimensions.y * 100).toString() + "%"}>
	        <PulseIndicator   
	        color = { props.windowData.isOpen ? red : 'transparent'} size = {10}/>
       </View>
	)
}

export default WindowIndicator;

const styles = StyleSheet.create({
	dot: {
	    position:'absolute',
	    marginTop: -5,
	    marginLeft: -5,
	    flex: 1,
 	}
});