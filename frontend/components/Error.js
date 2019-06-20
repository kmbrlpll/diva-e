import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Error extends React.Component {
	
	renderMessage = () => {
		if(this.props.error.error_code == null){
			return(
				<Text style={styles.code}>ERROR</Text>
                <Text style={styles.message}>An error happened, please try again!</Text>
			);
		} else if(this.props.error.error_code == undefined) {
			return (
				<Text style={styles.code}>ERROR</Text>
                <Text style={styles.message}>An error happened, please try again!</Text>
			);
		} else {
			return(
				<Text style={styles.code}>{this.props.error.error_code}</Text>
                <Text style={styles.message}>{this.props.error.message}</Text>
			);
		}
    }
	
	render() {
        return (
            <View style={styles.container}>
                  {this.renderMessage()}
            </View>
       );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  code: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 20,
  }
});