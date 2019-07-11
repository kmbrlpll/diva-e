import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import  { connect }  from "react-redux";

import {
  startPolling,
  cancelPolling
} from '../redux-saga-polling/actions.js';

import { Error } from '../components/Error.js';

import WindowMap from '../components/WindowMap.js';


class ShowtimeScreen extends Component{
componentDidMount(){
    let { dispatch } = this.props;
    dispatch(startPolling());
  }

  componentWillUnmount(){
    let { dispatch } = this.props;
    dispatch(cancelPolling());
  }

  returnWindowMap = () => {
    let {data} = this.props;
    if(data){
    return(<WindowMap
      windows_data = {data.openwindows }
      running_heaters_data = {data.runningheaters  }
      room_temperature_data={data.temperatures }/>);
    }
  }

  render(){
    // map the fetched data to variables and pass to properties of WindowMap
    let {data} = this.props;
    console.log("in component");
    console.log(data);

    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.backButton} onPress= {() => this.props.navigation.goBack()} >
          </TouchableOpacity>
          {this.returnWindowMap()}
     </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    is_polling: state.globalUnpersisted.is_polling,
    is_fetching: state.globalUnpersisted.is_fetching,
    data: state.globalUnpersisted.data,
    error_message: state.globalUnpersisted.error_message_load_all,
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

export default connect(mapStateToProps)(ShowtimeScreen);
