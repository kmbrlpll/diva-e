import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button ,Dimensions} from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons'
import WindowMap from "../components/WindowMap.js";

class WindowRoomPlanScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
        <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
            <Icon name='ios-arrow-dropup-circle' size= {40}/>
        </TouchableOpacity>
        <WindowMap></WindowMap>
      </View>
    );
  }
}

export default WindowRoomPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  backButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  }
});
