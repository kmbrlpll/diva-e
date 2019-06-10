import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";

const temperaturColorPalette = ['#0054ff' , '#04f06a' , '#f5b700' ,'#e80049','#ba212b'];

function assignThermometerColor (temperature) {
      let t = parseInt(temperature);
      if(t <= 15) {
        return temperaturColorPalette[0]; 
      }else if(t > 15 && t <= 20) {
        return temperaturColorPalette[1];
      }else if(t > 20 && t <= 25) {
        return temperaturColorPalette[2];
      }else if(t > 25 && t <= 30) {
        return temperaturColorPalette[3];
      }else if(t > 30) {
        return temperaturColorPalette[4];
      }
}

function ThermometherIndicator (props) {
	return (
		<View 
        left= {(props.thermometerData.x / props.imageDimensions.x * 100).toString() + "%"} 
        top = {(props.thermometerData.y / props.imageDimensions.y * 100).toString() + "%"}
        key = {props.thermometerData.id}
        style ={props.style}  
        backgroundColor = {assignThermometerColor(props.thermometerData.value)}
        ><Text style={props.textStyle}>{props.thermometerData.value}°</Text></View>
	) 
} 

export default ThermometherIndicator;