import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { TextField } from 'react-native-materialui-textfield';
import { Ionicons as Icon } from '@expo/vector-icons';


class SettingsScreen extends Component {

  render(){
    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
              <Icon name='ios-arrow-dropup-circle' size= {80}/>
          </TouchableOpacity>
      </View>
    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: "transparent"
  }
});
