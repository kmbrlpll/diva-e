import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { TextField } from 'react-native-materialui-textfield';
import { Ionicons as Icon } from '@expo/vector-icons';
import {  RaisedTextButton } from 'react-native-material-buttons';
import  { connect }  from "react-redux";

import {
  saveSettings
} from '../redux-saga/actions.js';

import { Error } from '../components/Error.js';
import { Loader } from '../components/Loader.js';

class SettingsScreen extends Component {


  constructor(props) {
  super(props);
  this.state = {
    server_address: '',
    port: '',
    submitted: false };
};

 componentDidMount(){

   console.log(this.props.saved_server_address);
 }
	


componentDidUpdate(prevProps, prevState){
  const {submitted} = this.state;
        if(submitted !== prevState.submitted){
            this.props.dispatch(saveSettings(this.state.server_address, this.state.port));
        }
}

 onPressSave = () => {
    this.setState({submitted: true});
  };

  renderSavedServerAndPort = (server_address) =>{
    let {saved_server_address, saved_port_number} = this.props;

    console.log(saved_server_address);
    if(saved_server_address && saved_port_number){
        return <Text> {server_address.concat(port_number)}</Text>
    }else{
      return null
    }
  }
  
  renderServerAddress = () => {
	  if (this.props.saved_server_address && this.props.saved_port_number) {
		  return (<Text style = {styles.connected}> {`${this.props.saved_server_address}${this.props.saved_port_number}`}</Text>);
	  }
	  else {
		  return (<Text style = {styles.notConnected}>You're not connected!</Text>);
	  }
  }
  
  renderItem = () => {
	  if (this.state.saving_and_validating_settings){
		  return (
			  <Loader></Loader>
		  );
	  }
	  else if (this.state.error_message_settings){
		  return (
			  <Error error={this.state.error_message_settings}></Error>
		  );
	  }
	  else {
		  return (
			  <View style = {styles.form}>
				  <View style = {styles.serverAddress}>
					  <Text style = {styles.title}>Currently connected to:</Text>
					  {this.renderServerAddress()}
				  </View>
				  <TextField
				  label="Serveradresse"
				  defaultValue= {this.props.saved_server_address}
				  value = {this.state.server_address}
				  onChangeText={ (server_address) => this.setState({ server_address: server_address }) }
				  />
				  <TextField
				  label="Port"
				  defaultValue={this.props.saved_port_number}
				  value = {this.state.port}
				  onChangeText={ (port) =>  this.setState({ port: port}) }
				  />
				  <TouchableOpacity style = {styles.saveButton} onPress = { this.onPressSave }>
					<Text style = {styles.save}>SAVE</Text>
				  </TouchableOpacity>
			  </View>
		  );
	  }
  }

  render(){
    return(
	  <ImageBackground source = {require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style = { styles.container } >
		  <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
              <Icon name='ios-arrow-dropup-circle' size= {80}/>
          </TouchableOpacity>
		  {this.renderItem()}
      </View>
	  </ImageBackground>
    );
  }
}


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
  },
  form: {
	justifyContent: 'center'
  },
  title: {
	fontWeight: 'bold',
	textDecorationLine: 'underline',
	fontSize: 16
  },
  connected: {
	color: '#1e1d23',
	fontWeight: 'bold'
  },
  notConnected: {
	color: 'red',
	fontWeight: 'bold'
  },
  saveButton: {
	backgroundColor: '#008080',
	alignItems: 'center',
	marginTop: 15
  },
  serverAddress: {
	alignItems: 'center'
  },
  save: {
	color: 'white',
	fontWeight: 'bold',
	fontSize: 16,
	padding: 10
  }
});



const mapStateToProps = state => {
  return {
    saving_and_validating_settings: state.settings.saving_and_validating_settings,
    saved_server_address: state.settings.saved_server_address,
    saved_port_number: state.settings.saved_port_number,
    error_message_settings: state.settings.error_message_settings,
  };
};



export default connect(mapStateToProps)(SettingsScreen);
