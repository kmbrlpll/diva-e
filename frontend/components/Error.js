import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Error extends React.Component {
	
	renderMessage = () => {
		if(this.props.error.error_code == null){
			return(
				<View>
				<Text style={styles.code}>ERROR</Text>
				<Image source={require('../assets/error.png')} />
                <Text style={styles.message}>An error happened, please try again!</Text>
				</View>
			);
		} else if(this.props.error.error_code == undefined) {
			return (
				<View>
				<Text style={styles.code}>ERROR</Text>
				<Image source={require('../assets/error.png')} />
                <Text style={styles.message}>An error happened, please try again!</Text>
				</View>
			);
		} else {
			return(
				<View>
				<Text style={styles.code}>{this.props.error.error_code}</Text>
				<Image source={require('../assets/error.png')} />
                <Text style={styles.message}>{this.props.error.message}</Text>
				</View>
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
    padding: 8
  },
  code: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 20
  }
});