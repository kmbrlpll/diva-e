import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";

const windowList = [
  {
    id: '1',
    x: 25 , 
    y: 160 , 
    isOpen: true,
  },
  {
    id: '2',
    x: 100 , 
    y: 160 , 
    isOpen: true,
  },
  {
    id: '3',
    x: 60 , 
    y: 160 , 
    isOpen: false,
  },
]

class LocationPlanScreen extends Component {

  render(){
    let windows = windowList.map( w => <View key={w.id} style={styles.dot} left= {w.x} top = {w.y} backgroundColor = { w.isOpen ? '#00FF7F' : '#FF3333' }></View> ) 
    return(
      <View style = { styles.container } > 
          <Image source={require('../assets/divaeBuroPlan.png')} style={styles.image} resizeMode = 'stretch'/>
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
    width: '3%',
    height: '1%',
    borderRadius: 5,
    flex: 1,
  }
});
