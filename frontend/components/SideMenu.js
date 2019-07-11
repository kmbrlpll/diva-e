import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity  } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { AntDesign as AntDesignIcon } from '@expo/vector-icons';
import { Entypo as EntypoIcon } from '@expo/vector-icons';
import { Ionicons as IoniconsIcon } from '@expo/vector-icons';
import { FontAwesome as FontAwesomeIcon } from '@expo/vector-icons';
import { Foundation as FoundationIcon } from '@expo/vector-icons';
import {Dimensions} from 'react-native';

import { widthPercentageToDP, heightPercentageToDP } from '../helpers/PercentageToDPHelper';

export default class SideMenu extends Component {
  constructor(props) {
     super(props);
     this.state = {
       currentComponent: 'Home',
       settingsInfoScreenAlreadyPressed: false,
       windowTrackerInfoScreenAlreadyPressed: false,
       heatTrackerInfoScreenAlreadyPressed: false,
     };
   }

    navigateToStack = ( route  ) =>() => {
      this.setState({currentComponent: route});
      const navigateAction = NavigationActions.navigate({
          routeName: route
      });
          this.props.navigation.dispatch(navigateAction);
    }

 render() {
   let {currentComponent} = this.state;
   return (
       <View style={styles.container}>
           <View style={styles.headerContainer}>
               <Image source={require('../assets/trackit.jpg')} style={styles.menuImage} >
               </Image>
           </View>
           <View style={styles.mainNavLabelContainer}>
               <TouchableOpacity onPress ={ this.navigateToStack('Home' )}  style= {styles.singleLabelContainer}>
                  <EntypoIcon name= "home" style= {styles.icon} size= {25} color='#b0c4de'/>
                  <Text style={(currentComponent == 'Home') ? styles.navScreenLabelActive : styles.navScreenLabelPassive}>Home</Text>
                </TouchableOpacity>
               <TouchableOpacity onPress ={ this.navigateToStack('Settings')} style= {styles.singleLabelContainer}>
                  <IoniconsIcon name= "ios-settings" style= {styles.icon}  size= {25}/>
                  <Text style={(currentComponent == 'Settings') ? styles.navScreenLabelActive : styles.navScreenLabelPassive}>Settings</Text>
                </TouchableOpacity>
               <TouchableOpacity onPress ={ this.navigateToStack('WindowTracker')} style= {styles.singleLabelContainer}>
                  <AntDesignIcon name= "appstore1" style= {styles.icon}  size= {25}/>
                  <Text style={(currentComponent == 'WindowTracker') ? styles.navScreenLabelActive : styles.navScreenLabelPassive}>Window Tracker</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress ={ this.navigateToStack('HeatTracker')} style= {styles.singleLabelContainer}>
                  <FontAwesomeIcon name= "thermometer-4" style= {styles.icon}  size= {25}/>
                  <Text style={(currentComponent == 'HeatTracker') ? styles.navScreenLabelActive : styles.navScreenLabelPassive}>Heat Tracker</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress ={ this.navigateToStack('Showtime')} style= {styles.singleLabelContainer}>
                  <FoundationIcon name= "lightbulb" style= {styles.icon}  size= {25}/>
                  <Text style={(currentComponent == 'Showtime') ? styles.navScreenLabelActive : styles.navScreenLabelPassive}>Showtime</Text>
                </TouchableOpacity>

           </View>
       </View>

   )
 }
}


  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1e1d23',
        height: Dimensions.get('window').height,
    },
    headerContainer: {
        height: 150,
        alignItems: 'center',
    },
    menuImage:{
       marginTop: heightPercentageToDP('6%'),
       width: widthPercentageToDP('35%'),
       height: widthPercentageToDP('35%'),
       justifyContent: 'center',
       borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
     },
     singleLabelContainer: {
       flexDirection: 'row',
       marginTop: heightPercentageToDP('5%'),
       alignItems: 'center',
     },
    navScreenLabelPassive: {
        color: '#a9a9a9',
        fontSize: widthPercentageToDP('4%'),
    },
    navScreenLabelActive: {
      color: '#f08080',
      fontSize: widthPercentageToDP('4%'),
    },
    icon: {
      marginLeft: widthPercentageToDP('7%'),
      width: widthPercentageToDP('9%'),
      alignItems: 'center',
      color: '#008080',

    },
    mainNavLabelContainer: {
        marginTop: heightPercentageToDP('6%'),
    },

});
