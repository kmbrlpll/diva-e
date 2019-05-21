import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class TestChildScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <Text>TestChildScreen</Text>
      </View>
    );
  }
}

export default TestChildScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
