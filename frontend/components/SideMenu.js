
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class SideMenu extends Component {

    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('./header.png')} style={{flex: 1, width: 200, justifyContent: 'center'}} >
                </ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Text style={styles.headerText} onPress={this.navigateToScreen('Screen1')}>Settings</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.headerText} onPress={this.navigateToScreen('Screen2')}>Fensterlageplan</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text style={styles.headerText} onPress={this.navigateToScreen('Screen3')}>SecondUseCase</Text>
                </View>
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

    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
/*screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },
*/
});
