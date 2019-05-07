import React, {Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


class SecondUseCaseScreen extends Component {
  render(){
    return(
      <View style = { styles.container }>
          <Text>Second Use Case Screen </Text>
      </View>
    );
  }
}

export default SecondUseCaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
