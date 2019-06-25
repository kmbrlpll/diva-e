import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export default class Loader extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <Text style={styles.load}>LOADING</Text>
              <ActivityIndicator size="large" color="##008080" />
              <Text style={styles.wait}>Please wait...</Text>
          </View>
       );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding: 8,
  },
    load: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
    wait: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 20,
  }
});