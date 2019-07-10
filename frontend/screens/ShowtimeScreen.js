import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Button } from "react-native";
import  { connect }  from "react-redux";

import {
  startPolling,
  cancelPolling
} from '../redux-saga-polling/actions.js';

import { Error } from '../components/Error.js';

import WindowMap from '../components/WindowMap.js';

class ShowtimeScreen extends Component {


/*  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(startPolling());
  }

  componentDidUnmount(){
    let { dispatch } = this.props;
    dispatch(cancelPolling());
  }
*/

  render(){
    return(
      <View style = { styles.container } >
        <Text> njffnfn </Text>
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

});

export default connect(mapStateToProps)(ShowtimeScreen);
