import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";
import {PulseIndicator} from 'react-native-indicators';
import ValueIndicator from './ValueIndicator';
import OnOffIndicator from './OnOffIndicator';


const windowList = [
  {
    id: '1',
    x: 64 ,
    y: 799,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '4',
    x: 162 ,
    y: 799,
    isOpen: false,
  },
  {
    id: '5',
    x: 195 ,
    y: 799,
    isOpen: false,
  },
  {
    id: '6',
    x: 218 ,
    y: 796,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '9',
    x: 327 ,
    y: 792,
    isOpen: false,
  },
  {
    id: '10',
    x: 360 ,
    y: 792,
    isOpen: false,
  },{
    id: '11',
    x: 393 ,
    y: 792,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '14',
    x: 492 ,
    y: 792,
    isOpen: false,
  },
  {
    id: '15',
    x: 525 ,
    y: 792,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '18',
    x: 632 ,
    y: 749,
    isOpen: false,
  },
  {
    id: '19',
    x: 632 ,
    y: 716,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '22',
    x: 632 ,
    y: 618,
    isOpen: false,
  },
  {
    id: '23',
    x: 632 ,
    y: 586,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '27',
    x: 632 ,
    y: 454,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '30',
    x: 632 ,
    y: 355,
    isOpen: false,
  },
  {
    id: '31',
    x: 632 ,
    y: 322,
    isOpen: false,
  },
  {
    id: '32',
    x: 632 ,
    y: 290,
    isOpen: false,
  },
  {
    id: '33',
    x: 637 ,
    y: 245,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '38',
    x: 640 ,
    y: 158,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '41',
    x: 640,
    y: 59,
    isOpen: false,
  },
  {
    id: '42',
    x: 325 ,
    y: 59,
    isOpen: false,
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
    isOpen: false,
  },
  {
    id: '45',
    x: 325 ,
    y: 163,
    isOpen: false,
  },
  {
    id: '46',
    x: 325 ,
    y: 191,
    isOpen: false,
  },
  {
    id: '47',
    x: 325 ,
    y: 223,
    isOpen: false,
  },
  {
    id: '48',
    x: 295 ,
    y: 278,
    isOpen: false,
  },
  {
    id: '49',
    x: 267 ,
    y: 278,
    isOpen: false,
  },
  {
    id: '50',
    x: 224 ,
    y: 278,
    isOpen: false,
  },
  {
    id: '51',
    x: 195 ,
    y: 278,
    isOpen: false,
  },
  {
    id: '52',
    x: 163,
    y: 278,
    isOpen: false,
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
    isOpen: false,
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
  },
  {
    id: 2,
    x: 196,
    y: 734,
    value: '28',
  },
  {
    id: 3,
    x: 310,
    y: 734,
    value: '18',
  },
  {
    id: 4,
    x: 425,
    y: 734,
    value: '10',
  },
  {
    id: 5,
    x: 558,
    y: 716,
    value: '23',
  },
  {
    id: 6,
    x: 575,
    y: 585,
    value: '13',
  },
  {
    id: 7,
    x: 575,
    y: 469,
    value: '17',
  },
  {
    id: 8,
    x: 575,
    y: 371,
    value: '20',
  },
  {
    id: 9,
    x: 575,
    y: 305,
    value: '27',
  },
  {
    id: 10,
    x: 575,
    y: 223,
    value: '31',
  },
  {
    id: 11,
    x: 575,
    y: 97,
    value: '13',
  },
  {
    id: 12,
    x: 416,
    y: 81,
    value: '15',
  },
  {
    id: 13,
    x: 390,
    y: 208,
    value: '26',
  },
  {
    id: 14,
    x: 385,
    y: 297,
    value: '33',
  },
  {
    id: 15,
    x: 262,
    y: 343,
    value: '19',
  },
  {
    id: 16,
    x: 162,
    y: 343,
    value: '23',
  },
  {
    id: 17,
    x: 69,
    y: 343,
    value: '24',
  },
]
let windowListNew = {
  window_id1:{
    x: 50 ,
    y: 200,
    state: 'open',
  },
  window_id2:{
    x: 50 ,
    y: 400,
    state: 'open',
  }
}

let temperatureListNew = {
  temperature_id1:{
    x: 100 ,
    y: 200,
    state: "26",
  },
  temperature_id2:{
    x: 100 ,
    y: 400,
    state: "12",
  }
}

let heaterListNew = {
  heater_id1:{
    x: 150 ,
    y: 200,
    state: '-12',
  },
  heater_id2:{
    x: 150 ,
    y: 400,
    state: '-15',
  }
}


const imageDimensions = { x : 2600 , y : 4185 };

export default class WindowMap extends Component {


  render(){
    let {windows_data,running_heaters_data,room_temperature_data} = this.props;

    windowListNew = windows_data ? windows_data : {};
    heaterListNew = running_heaters_data ? running_heaters_data : {};
    temperatureListNew = room_temperature_data ? room_temperature_data : {};


    let windows = Object.keys(windowListNew).map( w_key =>
      <OnOffIndicator
      key={w_key}
      windowData = {windowListNew[w_key]}
      imageDimensions = {imageDimensions}
      ></OnOffIndicator>);

    let heaters = Object.keys(heaterListNew).map( h_key =>
      <ValueIndicator
      key={h_key}
      thingData = {heaterListNew[h_key]}
      imageDimensions = {imageDimensions}
      ></ValueIndicator>);

    let thermomethers = Object.keys(temperatureListNew).map( t_key =>
      <ValueIndicator
      key = {t_key}
      thingData = {temperatureListNew[t_key]}
      imageDimensions = {imageDimensions}
      ></ValueIndicator>);

    return(
      <View style = {styles.container}>
          <Image source={require('../assets/plan.jpg')} style={styles.image} resizeMode = 'stretch'/>
          {windows}
          {thermomethers}
          {heaters}
      </View>
    );
  }
}

//export default WindowMap;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderWidth: Dimensions.get('window').width * 0.05,
    borderTopWidth: Dimensions.get('window').width * 0.12,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
