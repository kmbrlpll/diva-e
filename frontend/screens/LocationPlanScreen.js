import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class LocationPlanScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <Text>Location Plan Window Screen</Text>
      </View>
    );
  }
}

export default LocationPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
