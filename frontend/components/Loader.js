import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export default class Loader extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.load}>LADEN</Text>
              <ActivityIndicator size="large" color="##1e1d23" />
              <Text style={styles.wait}>Bitte warten...</Text>
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
    load: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
    wait: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 20,
  }
});