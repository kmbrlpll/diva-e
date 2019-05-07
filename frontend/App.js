import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';


import HomeSettingsScreen from './screens/HomeSettingsScreen';
import SecondUseCaseScreen from './screens/SecondUseCaseScreen';
import LocationPlanScreen from './screens/LocationPlanScreen';
import SideMenu from './components/SideMenu';

class Home extends Component {

toggleDrawer = () => {
  this.props.navigationProps.toggleDrawer();
};
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress = { this.toggleDrawer.bind(this) }>
        </TouchableOpacity>
      </View>
    );
  }
}



/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    flex: 1
  },
});*/


const stylingStackNavigators = {
   //titleStyle: { textAlign: 'center'},
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


const SettingsNavigator = createStackNavigator({
   HomeSettings: {
    screen: HomeSettingsScreen,
    navigationOptions: ({navigation}) => ({
      header: null
    }),
  }
});


const LocationPlanStackNavigator = createStackNavigator({
  LocationPlan: {
    screen: LocationPlanScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Fensterlageplan',
      ...stylingStackNavigators,
      headerLeft: <Home navigationProps= {navigation}/>,
    }),
  }
});


const SecondUseCaseStackNavigator = createStackNavigator({
  SecondUseCase: {
    screen: SecondUseCaseScreen,
    navigationOptions: ({navigation}) => ({
      title: 'SecondUseCase',
      ...stylingStackNavigators,
      headerLeft: <Home navigationProps= {navigation}/>,
    }),
  }
});


const DrawerNavigation = createDrawerNavigator(
  {
  Screen1: {
    screen: SettingsNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
      headerStyle : {
        backgroundColor: '#f4511e',
      },
    },
  },

  Screen2: {
    screen: LocationPlanStackNavigator,
    navigationOptions: {
      drawerLabel: 'Fensterlageplan'
    },
  },

  Screen3: {
    screen: SecondUseCaseStackNavigator,
    navigationOptions: {
      drawerLabel: 'SecondUseCase'
    },
  },

},

{
  drawerWidth: 200,
  contentComponent: SideMenu,
},
);


export default createAppContainer(DrawerNavigation);
