import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import WindowMap from "../components/WindowMap.js";

class WindowTrackerBaseScreen extends Component {
  render(){
    return(
      <WindowMap></WindowMap>
    )
  }
}

export default WindowTrackerBaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
