import React, {Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';




class HomeSettingsScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       input1: '',
       input2: '',
       input3: ''
     };
   }

  render(){
    let { input1, input2, input3 } = this.state;
    return(
      <View style = { styles.container } >
          <TextField
            label='input1'
            value={input1}
            onChangeText={ (input1) => this.setState({ input1 }) }
          />
          <TextField
            label='input2'
            value={input2}
            onChangeText={ (input2) => this.setState({ input2 }) }
          />
          <TextField
            label='input3'
            value={input3}
            onChangeText={ (input3) => this.setState({ input3 }) }
          />
      </View>
    );
  }
}

export default HomeSettingsScreen;

const styles = StyleSheet.create({
  container: {

  }
});
