import React, {Component } from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { Card } from 'react-native-elements';
import { Ionicons as Icon } from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation';
import {Dimensions} from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper.js';

import InfoContainer from "../components/InfoContainer.js";

class WindowTrackerInfoScreen extends Component {

  navigateFromInfoToFunctionalScreen = ( route ) =>() => {
    const navigateAction = NavigationActions.navigate({
        routeName: route
    });
        this.props.navigation.dispatch(navigateAction);
  }

  render(){
    return(
	  <ImageBackground source = {require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
      <View style = { styles.container } >

          <TouchableOpacity style = {styles.bottomButton} onPress= {this.navigateFromInfoToFunctionalScreen('WindowRoomPlan')}>
              <Icon name='ios-arrow-dropdown-circle' size= {80}/>
          </TouchableOpacity>
		  <Card title ="Window Tracker" style = {styles.card  }><View>
      <Text>The Window Tracker displays open windows in your office!</Text>
    </View></Card>
    </View>

	  </ImageBackground>
    );
  }
}

export default WindowTrackerInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
    height: heightPercentageToDP('100%')
  },
  card: {
    marginTop: heightPercentageToDP('40%')
  },
  bottomButton: {
    position: 'absolute',
    bottom:0,
    backgroundColor: "transparent"
  },
});
