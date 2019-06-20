import React, {Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation';


import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper.js';

import { InfoContainer } from '../components/InfoContainer.js';

class HeatTrackerInfoScreen extends Component {

  navigateFromInfoToFunctionalScreen = ( route ) =>() => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
        this.props.navigation.dispatch(navigateAction);
  }

  render(){
    return(
      <View style = { styles.container } >
          <TouchableOpacity style = {styles.bottomButton} onPress= {this.navigateFromInfoToFunctionalScreen('HeatRoomPlan')}>
              <Icon name='ios-arrow-dropdown-circle' size= {80}/>
			  <InfoContainer title='Heat Tracker info='Look at temperatures...'></InfoContainer>
          </TouchableOpacity>
      </View>
    );
  }
}

export default HeatTrackerInfoScreen;

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
