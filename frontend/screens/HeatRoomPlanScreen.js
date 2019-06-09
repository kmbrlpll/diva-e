import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import  { connect }  from "react-redux";

import {
  loadTurnedOnHeaters,
  loadRoomTemperatures,
  loadRoomMap,
} from '../redux-saga/actions.js';

class HeatRoomPlanScreen extends Component {
  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(loadRoomMap());
    dispatch(loadTurnedOnHeaters());
    dispatch(loadRoomTemperatures());
 }

  render(){
    let {room_plan, room_temperatures, turned_on_heaters, error_message_heaters, error_message_room_plan, error_message_room_temperatures} = this.props;

    if(turned_on_heaters && room_temperatures && room_plan){
      console.log("running heaters, room temperatures and room plan there.");
    }
    if(error_message_room_plan && error_message_heaters && error_message_room_temperatures){
      console.log("errors in heat tracker caught");

    }

    if(error_message_room_plan){
      console.log("room Plan in heat tracker");
      console.log(room_plan);
    }

    if(error_message_room_temperatures){
      console.log("room temperatures");
      console.log(room_temperatures);
    }

    if(error_message_heaters){
      console.log("turned on heaters");
      console.log(turned_on_heaters);
    }
    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
              <Icon name='ios-arrow-dropup-circle' size= {80}/>
          </TouchableOpacity>
      </View>
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
  }
});

const mapStateToProps = state => {
  return {
    fetching_turned_on_heaters: state.globalUnpersisted.fetching_turned_on_heaters,
    turned_on_heaters: state.globalUnpersisted.turned_on_heaters,
    error_message_heaters: state.globalUnpersisted.error_message_heaters,

    fetching_room_temperatures: state.globalUnpersisted.fetching_room_temperatures,
    room_temperatures: state.globalUnpersisted.room_temperatures,
    error_message_room_temperatures: state.globalUnpersisted.error_message_room_temperatures,

    fetching_room_plan: state.globalUnpersisted.fetching_room_plan,
    room_plan: state.globalUnpersistedroom_plan,
    error_message_room_plan: state.globalUnpersisted.error_message_room_plan,
  };
};



export default connect(mapStateToProps)(HeatRoomPlanScreen);
