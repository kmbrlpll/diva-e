
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, Image  } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';

const drawerItems = {
'Settings': {
  'Settings_Base': 'Settings Info',
},
'WindowUseCase': {
  'WindowUseCase_Base': 'Window Tracker Info',
  'WindowUseCase_Add': 'Add Window',
  'WindowUseCase_LocationPlan': 'Window Location Plan',
},

'SecondUseCase': {
  'SecondUseCase_Base': 'Second Use Case Info',
  'SecondUseCase_Child1': 'Second Use Case Child1',
  'SecondUseCase_Child2': 'Second Use Case Child2',
}
};

const evaluateOuterDrawer = (items) => {
  return Object.keys(items);
};


export default class SideMenu extends Component {


  constructor(props) {
  super(props);
  this.state = {
    mainDrawer: true,
    currentComponent: '',
  };
}

    navigateToChildBaseScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.setState({mainDrawer: false});
        const useCase = route.substring(0, route.indexOf('_'));
        this.setState({currentComponent: useCase});
    })


    navigateToSpecificChildScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })


    navigateBackToRootDrawer = ()=> {
          let {currentComponent } = this.state;
          this.setState({mainDrawer: true});

            const navigateAction = NavigationActions.navigate({
                routeName:  currentComponent
            });
            this.props.navigation.dispatch(navigateAction);

    };

    renderOuterDrawer = (routeNameArray) => {
      return(
            routeNameArray.map(
              (item) => { return <Text style={styles.headerText} onPress = {this.navigateToChildBaseScreen( Object.keys(drawerItems[item])[0])}>{Object.values(drawerItems[item])[0]}</Text>;}
            )
          );
    };


    renderChildDrawerItems = () => {
      return(
        childRoutes.map(
          (item) => {
            return <Text style={styles.headerText} onPress = {this.navigateToSpecificChildScreen(item)}>{childRoutes[item]}</Text>;}
        )
      );
    }

    renderItems = (routeNames) => {
      let {mainDrawer, currentComponent} = this.state;
      let routeNameArray = Object.keys(routeNames);
      if(mainDrawer == true){

        return(
        this.renderOuterDrawer(routeNameArray)
        );

      }else{

        let {currentComponent} = this.state;

        const childRoutes = Object.keys(drawerItems[currentComponent]);

                const Children =  () => {
                  return (childRoutes.map(
                      (item) => {
                        return (

                          <Text style={styles.headerText} onPress = {this.navigateToSpecificChildScreen(item)}>{drawerItems[currentComponent][item]}</Text>

                        )
                        ;}
                    )
                  )
                };

          return(
              <View style={styles.screenStyle}>
              <View style={styles.backButtonRow}>
              <Icon
                name="ios-arrow-back"
                size={25}
                style={styles.customDrawerIcon}
                color="#666666"
                onPress={() => {
                  this.setState({mainDrawer: true});
                  this.navigateBackToRootDrawer;
                }
                }
                />
              <Text style={{ color: '#666666' }}
              onPress={() => {
                this.setState({mainDrawer: true});
                this.navigateBackToRootDrawer;
              }
              }
              >Back to Components</Text>
              </View>
              <View style={styles.styleViewUnterBackButton}>
              <Children />
              </View>
              </View>
        );
      }
    };


  render() {
    const {items,...restProps} = this.props;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('./header.png')} style={{ marginTop: 30, width: 100, height: 100, justifyContent: 'center', borderRadius: 100/2}} >
                </Image>
            </View>
            <View style={styles.screenContainer}>
                {this.renderItems(drawerItems)}
            </View>
        </View>

    )
  }
}


  const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#1e1d23',
        height: 1000
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: '#fff8f8',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 15,
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    customDrawerIcon: { paddingRight: 10 },
    backButtonRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 17,
      paddingLeft: 3,
      borderBottomColor: '#F0F0F0',
      borderBottomWidth: 1,
},

styleViewUnterBackButton: {
    marginTop: 50,
  flexDirection: 'column'
},

screenStyleUnderBackButton: {

    height: 30,
    marginTop: 50,
    alignItems: 'center'
},
});
