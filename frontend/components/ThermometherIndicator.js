import React, {Component } from "react";
import { View, Text ,StyleSheet} from "react-native";

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
       	style ={styles.thermo}  
        backgroundColor = {assignThermometerColor(props.thermometerData.value)}
        ><Text style={styles.text}>{props.thermometerData.value}°</Text></View>
	) 
} 

export default ThermometherIndicator;

const styles = StyleSheet.create({
  thermo: {
    position: 'absolute', 
    justifyContent: 'center',
    alignItems: 'center',
    flex:1, 
    width: 20, 
    height: 20, 
    borderRadius: 10,
    marginLeft: -10, 
    marginTop: -10,
   },
  text: {
    color: 'white',
    fontSize: 8,
  }
});