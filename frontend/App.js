import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';


import HomeSettingsScreen from './screens/HomeSettingsScreen';
import SecondUseCaseScreen from './screens/SecondUseCaseScreen';
import WindowTrackerBaseScreen from './screens/WindowTrackerBaseScreen';
import AddWindowScreen from './screens/AddWindowScreen';
import TestChildScreen from './screens/TestChildScreen';
import TestChildScreen2 from './screens/TestChildScreen2';

import SideMenu from './components/SideMenu';
import { widthPercentageToDP, heightPercentageToDP } from './helpers/PercentageToDPHelper.js';

class DrawerStackNavigation extends Component {
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



const WindowTrackerScreenStackNavigator= createStackNavigator({
  WindowTrackerBase: {
    screen: WindowTrackerBaseScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Window Use Case Base',
      ...stylingStackNavigators,
      headerLeft: <DrawerStackNavigation navigationProps= {navigation}/>,
    }),
  }

});


/*const LocationPlanStackNavigator = createStackNavigator({
  LocationPlan: {
    screen: LocationPlanScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Fensterlageplan',
      ...stylingStackNavigators,

      headerLeft: <DrawerStackNavigation navigationProps= {navigation}/>,
    }),
  }
});*/


const SecondUseCaseStackNavigator = createStackNavigator({
  SecondUseCase: {
    screen: SecondUseCaseScreen,
    navigationOptions: ({navigation}) => ({
      title: 'SecondUseCase',
      ...stylingStackNavigators,
      headerLeft: <DrawerStackNavigation  navigationProps= {navigation}/>,
    }),
  }
});


/*const AddWindowStackNavigator = createStackNavigator({
  AddWindow: {
    screen: LocationPlanScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Add Window Screen',
      ...stylingStackNavigators,
      headerLeft: <DrawerStackNavigation navigationProps= {navigation}/>,
    }),
  }
});
*/

const TestChildStackNavigator = createStackNavigator({
  SecondUseCaseTestChild1: {
    screen: TestChildScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Test Child 1',
      ...stylingStackNavigators,
      headerLeft: <DrawerStackNavigation  navigationProps= {navigation}/>,
    }),
  }
});

const TestChild2StackNavigator = createStackNavigator({
  SecondUseCaseTestChild2: {
    screen: TestChildScreen2,
    navigationOptions: ({navigation}) => ({
      title: 'Test Child 2',
      ...stylingStackNavigators,
      headerLeft: <DrawerStackNavigation  navigationProps= {navigation}/>,
    }),
  }
});

const DrawerNavigation = createDrawerNavigator(
  {
  'Settings_Base': {
    screen: SettingsNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },

  'WindowUseCase_Base': {
    screen: WindowTrackerScreenStackNavigator,
    navigationOptions: {
      drawerLabel: 'Window Use Case Base'
    },
  },

  /*'WindowUseCase_LocationPlan': {
    screen: LocationPlanStackNavigator,
    navigationOptions: {
      drawerLabel: 'Window Location Plan'
    },
  },*/
/*
  'WindowUseCase_Add': {
    screen: AddWindowStackNavigator,
    navigationOptions: {
      drawerLabel: 'Add Window',
    },
  },*/

  'SecondUseCase_Base': {

    screen: SecondUseCaseStackNavigator,
    navigationOptions: {
      drawerLabel: 'SecondUseCase'
    },
  },

'SecondUseCase_Child1': {
    screen: TestChildStackNavigator,
    navigationOptions: {
      drawerLabel: 'Test Child 1'
    },
  },

  'SecondUseCase_Child2': {
    screen: TestChild2StackNavigator,
    navigationOptions: {
      drawerLabel: 'Test Child 2'
    },
  },
  },


{
  drawerWidth: 200,
  contentComponent: SideMenu,
},
);


export default createAppContainer(DrawerNavigation);
