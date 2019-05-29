import React, {Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation';

import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper.js';


class WindowTrackerInfoScreen extends Component {

  navigateFromInfoToFunctionalScreen = ( route ) =>() => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
        this.props.navigation.dispatch(navigateAction);
  }

  render(){
    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.bottomButton} onPress= {this.navigateFromInfoToFunctionalScreen('WindowRoomPlan')}>
              <Icon name='ios-arrow-dropdown-circle' size= {80}/>
          </TouchableOpacity>
      </View>
    );
  }
}

export default WindowTrackerInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 36,
    height: heightPercentageToDP('100%')
  },
  bottomButton: {
    position: 'absolute',
    bottom:0,
    backgroundColor: "transparent"
  }
});
