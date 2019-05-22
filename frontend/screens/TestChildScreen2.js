import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class TestChildScreen2 extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <Text>TestChildScreen2</Text>
      </View>
    );
  }
}

export default TestChildScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
