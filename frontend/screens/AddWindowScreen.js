import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class AddWindowScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <Text>Add Window Here</Text>
      </View>
    );
  }
}

export default AddWindowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
