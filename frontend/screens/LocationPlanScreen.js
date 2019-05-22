import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,  
  WaveIndicator,
} from 'react-native-indicators';

const windowList = [
  {
    id: '1.1',
    x: 64 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '1.2',
    x: 96 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '1.3',
    x: 129 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '1.4',
    x: 162 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '1.5',
    x: 195 , 
    y: 799, 
    isOpen: true,
  },
]
const xMax = 665; 
const yMax = 828;
//left= {(w.x / xMax * 100).toString() + "%"} top = {(w.y / yMax * 100).toString() + "%"}
class LocationPlanScreen extends Component {
  render(){
    let windows = windowList.map( w => 
      <View key={w.id} style={styles.dot} left= {(w.x / xMax * 100).toString() + "%"} top = {(w.y / yMax * 100).toString() + "%"}>
        <PulseIndicator   
        color = { w.isOpen ? '#FF3333' : '#00FF7F'} size = {10}/>
       </View>); 
    return(
      <View style = { styles.container } > 
          <Image source={require('../assets/divaeBuroPlanRaisedBrightness.png')} style={styles.image} resizeMode = 'stretch'/>
          {windows}

      </View>
    );
  }
}

export default LocationPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: Dimensions.get('window').width * 0.05,
    borderStyle: 'solid', 
    borderColor: '#999999', 
    position: 'relative', 
  }, 
  image: {
    width: '100%', 
    height: '100%',
  },
  dot: {
    position:'absolute',
    marginTop: -5,
    marginLeft: -5,
    flex: 1,
  }
});
