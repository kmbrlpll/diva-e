import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class SecondUseCaseScreen extends Component {
  render(){
    return(
      <View style = { styles.container } >
          <Text>Second Use Case Base</Text>
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
