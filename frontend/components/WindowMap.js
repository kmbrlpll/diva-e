import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";
import {PulseIndicator} from 'react-native-indicators';
import ThermometherIndicator from './ThermometherIndicator';


const windowList = [
  {
    id: '1',
    x: 64 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '2',
    x: 96 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '3',
    x: 129 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '4',
    x: 162 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '5',
    x: 195 , 
    y: 799, 
    isOpen: true,
  },
  {
    id: '6',
    x: 218 , 
    y: 796, 
    isOpen: true,
  },
  {
    id: '7',
    x: 261 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '8',
    x: 294 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '9',
    x: 327 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '10',
    x: 360 , 
    y: 792, 
    isOpen: true,
  },{
    id: '11',
    x: 393 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '12',
    x: 425 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '13',
    x: 459 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '14',
    x: 492 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '15',
    x: 525 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '16',
    x: 557 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '17',
    x: 590 , 
    y: 792, 
    isOpen: true,
  },
  {
    id: '18',
    x: 632 , 
    y: 749, 
    isOpen: true,
  },
  {
    id: '19',
    x: 632 , 
    y: 716, 
    isOpen: true,
  },
  {
    id: '20',
    x: 632 , 
    y: 684, 
    isOpen: true,
  },
  {
    id: '21',
    x: 632 , 
    y: 651, 
    isOpen: true,
  },
  {
    id: '22',
    x: 632 , 
    y: 618, 
    isOpen: true,
  },
  {
    id: '23',
    x: 632 , 
    y: 586, 
    isOpen: true,
  },
  {
    id: '24',
    x: 632 , 
    y: 552, 
    isOpen: true,
  },
  {
    id: '25',
    x: 632 , 
    y: 519, 
    isOpen: true,
  },
  {
    id: '26',
    x: 632 , 
    y: 485, 
    isOpen: true,
  },
  {
    id: '27',
    x: 632 , 
    y: 454, 
    isOpen: true,
  },
  {
    id: '28',
    x: 632 , 
    y: 421, 
    isOpen: true,
  },
  {
    id: '29',
    x: 632 , 
    y: 388, 
    isOpen: true,
  },
  {
    id: '30',
    x: 632 , 
    y: 355, 
    isOpen: true,
  },
  {
    id: '31',
    x: 632 , 
    y: 322, 
    isOpen: true,
  },
  {
    id: '32',
    x: 632 , 
    y: 290, 
    isOpen: true,
  },
  {
    id: '33',
    x: 637 , 
    y: 245, 
    isOpen: true,
  },
  {
    id: '36',
    x: 640 , 
    y: 224, 
    isOpen: true,
  },
  {
    id: '37',
    x: 640 , 
    y: 191, 
    isOpen: true,
  },
  {
    id: '38',
    x: 640 , 
    y: 158, 
    isOpen: true,
  },
  {
    id: '39',
    x: 640 , 
    y: 125, 
    isOpen: true,
  },
  {
    id: '40',
    x: 640 , 
    y: 91, 
    isOpen: true,
  },
  {
    id: '41',
    x: 640, 
    y: 59, 
    isOpen: true,
  },
  {
    id: '42',
    x: 325 , 
    y: 59, 
    isOpen: true,
  },
  {
    id: '43',
    x: 325 , 
    y: 91, 
    isOpen: true,
  },
    {
    id: '44',
    x: 325, 
    y: 120, 
    isOpen: true,
  },
  {
    id: '45',
    x: 325 , 
    y: 163, 
    isOpen: true,
  },
  {
    id: '46',
    x: 325 , 
    y: 191, 
    isOpen: true,
  },
  {
    id: '47',
    x: 325 , 
    y: 223, 
    isOpen: true,
  },
  {
    id: '48',
    x: 295 , 
    y: 278, 
    isOpen: true,
  },
  {
    id: '49',
    x: 267 , 
    y: 278, 
    isOpen: true,
  },
  {
    id: '50',
    x: 224 , 
    y: 278, 
    isOpen: true,
  },
  {
    id: '51',
    x: 195 , 
    y: 278, 
    isOpen: true,
  },
  {
    id: '52',
    x: 163, 
    y: 278, 
    isOpen: true,
  },
  {
    id: '53',
    x: 135 , 
    y: 278, 
    isOpen: true,
  },
  {
    id: '54',
    x: 92 , 
    y: 278, 
    isOpen: true,
  },
  {
    id: '55',
    x:  64, 
    y: 278, 
    isOpen: true,
  }
]
const thermometherList = [
  {
    id: 1, 
    x: 85,
    y: 734,
    value: '26', 
    type: 'thermomether',
  },
  {
    id: 2, 
    x: 196,
    y: 734,
    value: '28', 
    type: 'thermomether',
  },
  {
    id: 3, 
    x: 310,
    y: 734,
    value: '18', 
    type: 'thermomether',
  },
  {
    id: 4, 
    x: 425,
    y: 734,
    value: '10', 
    type: 'thermomether',
  },
  {
    id: 5, 
    x: 558,
    y: 716,
    value: '23', 
    type: 'thermomether',
  },
  {
    id: 6, 
    x: 575,
    y: 585,
    value: '13', 
    type: 'thermomether',
  },
  {
    id: 7, 
    x: 575,
    y: 469,
    value: '17', 
    type: 'thermomether',
  },
  {
    id: 8, 
    x: 575,
    y: 371,
    value: '20', 
    type: 'thermomether',
  },
  {
    id: 9, 
    x: 575,
    y: 305,
    value: '27', 
    type: 'thermomether',
  },
  {
    id: 10, 
    x: 575,
    y: 223,
    value: '31', 
    type: 'thermomether',
  },
  {
    id: 11, 
    x: 575,
    y: 97,
    value: '13', 
    type: 'thermomether',
  },
  {
    id: 12, 
    x: 416,
    y: 81,
    value: '15', 
    type: 'thermomether',
  },
  {
    id: 13, 
    x: 390,
    y: 208,
    value: '26', 
    type: 'thermomether',
  },
  {
    id: 14, 
    x: 385,
    y: 297,
    value: '33', 
    type: 'thermomether',
  },
  {
    id: 15, 
    x: 262,
    y: 343,
    value: '19', 
    type: 'thermomether',
  },
  {
    id: 16, 
    x: 162,
    y: 343,
    value: '23', 
    type: 'thermomether',
  },
  {
    id: 17, 
    x: 69,
    y: 343,
    value: '24', 
    type: 'thermomether',
  },
]

const temperaturColorPalette = ['#0054ff' , '#04f06a' , '#f5b700' ,'#e80049','#ba212b']

const xMax = 665; 
const yMax = 828;
const imageDimensions = { x : 665 , y : 828 };
const red = '#FF3333';
class WindowMap extends Component {

  assignThermometerColor = (temperature) => {
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

  render(){
    let windows = windowList.map( w => 
        <View 
        key={w.id} 
        style={styles.dot} 
        left= {(w.x / xMax * 100).toString() + "%"} 
        top = {(w.y / yMax * 100).toString() + "%"}>
        <PulseIndicator   
        color = { w.isOpen ? red : 'transparent'} size = {10}/>
       </View>); 
    let thermomethers = thermometherList.map( t => <ThermometherIndicator 
      key = {t.id}
      style ={styles.thermo} 
      textStyle = {styles.thermoText}
      thermometerData = {t}
      imageDimensions = {imageDimensions}
      ></ThermometherIndicator>);
    return(
      <View style = {styles.container}> 
          <Image source={require('../assets/divaeBuroPlanRaisedBrightness.png')} style={styles.image} resizeMode = 'stretch'/>
          {windows}
          {this.props.type == 'thermometer' ? thermomethers : null}
      </View>
    );
  }
}

export default WindowMap;

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    borderWidth: Dimensions.get('window').width * 0.05,
    borderTopWidth: Dimensions.get('window').width * 0.12,
    borderStyle: 'solid', 
    borderColor: '#EEEEEE', 
    position: 'absolute', 
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
  }, 
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
  thermoText: {
    color: 'white',
    fontSize: 8,
  }
});