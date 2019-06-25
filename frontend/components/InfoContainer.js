import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

class InfoContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		  <Text style={styles.title}>{this.props.title}</Text>
		  <Text style={styles.infoText}>{this.props.info}</Text>
	  </View>
	  
    );
  }
}

export default InfoContainer;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding: 8,
  },	
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },	
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 20,
  }
});