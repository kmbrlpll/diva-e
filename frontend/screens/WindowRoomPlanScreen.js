import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import  { connect }  from "react-redux";
import WindowMap from '../components/WindowMap.js';

import {
  loadOpenWindows,
  loadRoomMap
} from '../redux-saga/actions.js';

import { Error } from '../components/Error.js';
import { Loader } from '../components/Loader.js';

class WindowRoomPlanScreen extends Component {

  componentDidMount(){
    let { dispatch } = this.props;
    dispatch(loadOpenWindows());
    dispatch(loadRoomMap());
  }

  render(){
    let {open_windows, room_plan, error_message_windows, error_message_room_plan} = this.props;
    if(error_message_windows &&  error_message_room_plan){
      console.log("errors in window tracker caught");

    }
    if(open_windows && room_plan){
      console.log("window tracker");
      console.log(open_windows);
      console.log(room_plan);
    }

    if(error_message_windows){
      console.log("open windows");
      console.log(open_windows);
    }

    if(error_message_room_plan){
      console.log("room plan error");

    }


    return(
      <View style = { styles.container } >
      <WindowMap></WindowMap>
        <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
            <Icon name='ios-arrow-dropup-circle' size= {40}/>
        </TouchableOpacity>
		    <WindowMap
        windows_data = {open_windows}
        running_heaters_data = {/*turned_on_heaters*/[]}
        room_temperature_data={/*room_temperatures*/[]}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching_open_windows: state.globalUnpersisted.fetching_open_windows,
    open_windows: state.globalUnpersisted.open_windows,
    error_message_windows: state.globalUnpersisted.error_message_windows,

    fetching_room_plan: state.globalUnpersisted.fetching_room_plan,
    room_plan: state.globalUnpersisted.room_plan,
    error_message_room_plan: state.globalUnpersisted.error_message_room_plan,
  };
};

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

export default connect(mapStateToProps)(WindowRoomPlanScreen);
  /*

  renderScreenState =()=> {

	  if (this.state.fetching_open_windows || this.state.fetching_room_plan){
		  return (
			  <Loader></Loader>
		  );
	  }
	  else if (this.state.error_message_windows){
		  return (
			  <Error error={this.state.error_message_windows}></Error>
		  );
	  }
	  else if (this.state.error_message_room_plan){
		  return (
			  <Error error={this.state.error_message_room_plan}></Error>
		  );
	  }
	  else {
		  return (
			  <WindowMap type='window' ></WindowMap>
		  );
	  }
  }*/
