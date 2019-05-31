import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons'
import WindowMap from "../components/WindowMap.js";

class HeatRoomPlanScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
              <Icon name='ios-arrow-dropup-circle' size= {40}/>
          </TouchableOpacity>
          <WindowMap type='thermometer' ></WindowMap>
      </View>
    );
  }
}

export default HeatRoomPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  }
});
