import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import  { connect }  from "react-redux";

import {} from '../redux-saga/actions.js';


class ShowtimeScreen extends Component {
  componentDidMount() {
    //TODO here dispatch
   }
	
  render(){
    // map the fetched data to variables and pass to properties of WindowMap
    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
            <Icon name='ios-arrow-dropup-circle' size= {40}/>
			      <WindowMap 
            windows_data = {/*open_windows*/} 
            running_heaters_data = {/*turned_on_heaters*/} 
            room_temperature_data={/*room_temperatures*/}/>    
          </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: "transparent",
    zIndex: 1,
  }
});

const mapStateToProps = state => {
  return {
    };
};



export default connect(mapStateToProps)(HeatRoomPlanScreen);
