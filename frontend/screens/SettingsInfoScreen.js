import React, {Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { Ionicons as Icon } from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation';

import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper.js';

import { InfoContainer } from '../components/InfoContainer.js';

class SettingsInfoScreen extends Component {

       navigateFromInfoToFunctionalScreen = ( route ) =>() => {
         const navigateAction = NavigationActions.navigate({
             routeName: route
         });
             this.props.navigation.dispatch(navigateAction);
       }

  render(){
    return(
      <View style = {styles.container}>
          <TouchableOpacity style = {styles.bottomButton} onPress= {this.navigateFromInfoToFunctionalScreen('Settings')}>
              <Icon name='ios-arrow-dropdown-circle' size= {80}/>
			  <InfoContainer title='Settings Screen' info='Setting for...'></InfoContainer>
           </TouchableOpacity>
      </View>
    );
  }
}

export default SettingsInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 36,
    height: heightPercentageToDP('100%')
  },
  bottomButton: {
   position: 'absolute',
   bottom:0,
   backgroundColor: "transparent"
  }

  }
);
