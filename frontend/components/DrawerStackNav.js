import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Navigation, DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Title, Right, Button, Footer, FooterTab } from 'native-base';
import { createStackNavigator, createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { fromBottom, fromTop } from 'react-navigation-transitions';
import { Ionicons as Icon } from '@expo/vector-icons';

import HomeScreen from '../screens//HomeScreen';
import SettingsInfoScreen from '../screens/SettingsInfoScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WindowTrackerInfoScreen from '../screens/WindowTrackerInfoScreen';
import WindowRoomPlanScreen from '../screens/WindowRoomPlanScreen';
import HeatTrackerInfoScreen from '../screens/HeatTrackerInfoScreen';
import HeatRoomPlanScreen from '../screens/HeatRoomPlanScreen';


import SideMenu from './SideMenu';
import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper.js';

class DrawerStackNavigation extends Component {
toggleDrawer = () => {
  this.props.navigationProps.toggleDrawer();
};
  render() {
    return (
      <View>
      <Header style= {styles.header}>
        <Left>
          <Button transparent onPress={this.toggleDrawer}>
            <Icon name='md-menu' size= {widthPercentageToDP('8%')}/>
          </Button>
        </Left>
        <Body>
          <Text>{this.props.title}</Text>
        </Body>
        <Right>
        </Right>
      </Header>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
      paddingTop: heightPercentageToDP('3%'),
      backgroundColor: '#008080',
  },
  footer: {
    marginBottom: 0,
  }

});



const stylingStackNavigators = {

   headerRight:<View style={{padding:6}}></View>,
   headerStyle: {
     backgroundColor: '#707070'},
     headerTintColor: '#fff',
     headerTitleStyle: {
     alignSelf: 'center',
     textAlign: "center",
     justifyContent: 'center',
     flex: 1,
     fontWeight: 'bold',
     textAlignVertical: 'center'

   }
   };


// Stack Navigators
const HomeNavigator = createStackNavigator({
   Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      header: <DrawerStackNavigation navigationProps= {navigation} title = 'Home'/>,
    }),
  }

});


const SettingsStack = createStackNavigator({
  SettingsInfo: {
    screen: SettingsInfoScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Settings Info',
      ...stylingStackNavigators,
      header: <DrawerStackNavigation navigationProps= {navigation} title = 'Settings' nextScreen = {true} nextScreenName = "Settings"/>,
    }),
  },

  Settings: {
  screen: SettingsScreen,
  navigationOptions: ({navigation}) => ({
    title: 'Settings',
    ...stylingStackNavigators,
      header: <DrawerStackNavigation navigationProps= {navigation} title = 'Settings'/>,
  }),
 },
 },
  {
    initialRouteName: 'SettingsInfo',
  },

);

const WindowTrackerStack = createStackNavigator(
{
  WindowTrackerInfo: {
    screen: WindowTrackerInfoScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Window Tracker Info',
      ...stylingStackNavigators,
      header: <DrawerStackNavigation navigationProps= {navigation} title = 'Window Tracker'/>,
    }),
  },

  WindowRoomPlan: {
  screen: WindowRoomPlanScreen,
  navigationOptions: ({navigation}) => ({
    title: 'Track Open windows',
    ...stylingStackNavigators,
      header: <DrawerStackNavigation navigationProps= {navigation} title = 'Window Tracker'/>,
  }),
 },
},
  {
    initialRouteName: 'WindowTrackerInfo',
  },

);



const HeatTrackerStack = createStackNavigator(
  {
  HeatTrackerInfo: {
    screen: HeatTrackerInfoScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Heat Tracker Info',
      ...stylingStackNavigators,
      header: <DrawerStackNavigation navigationProps= {navigation} title = 'Temperature Tracker'/>,
    }),
  },

 HeatRoomPlan: {
 screen: HeatRoomPlanScreen,
 navigationOptions: ({navigation}) => ({
  title: 'Track Open windows',
  ...stylingStackNavigators,
    header: <DrawerStackNavigation navigationProps= {navigation} title = 'Temperature Tracker'/>,
   }),
 },
},

{
  initialRouteName: 'HeatTrackerInfo',
},
);



const DrawerStackNavigationApp = createDrawerNavigator(
  {
    'Home': {
    screen: HomeNavigator,
  },

    'Settings': {
    screen: SettingsStack,
  },
    'WindowTracker': {
    screen: WindowTrackerStack,
  },

   'HeatTracker': {
    screen: HeatTrackerStack,
  },
  },


{
  drawerWidth: widthPercentageToDP('60%'),
  contentComponent: SideMenu,
},
);


export default createAppContainer(DrawerStackNavigationApp);
