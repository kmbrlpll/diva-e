import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";
import {PulseIndicator} from 'react-native-indicators';

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
]
const xMax = 665; 
const yMax = 828;

class WindowMap extends Component {
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

export default WindowMap;

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
