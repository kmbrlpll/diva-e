import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class WindowTrackerBaseScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <Text>Window Use Case Base Screen</Text>
      </View>
    );
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
