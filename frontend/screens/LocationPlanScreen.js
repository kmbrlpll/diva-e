import React, {Component } from "react";
import { View, Text, StyleSheet, Button , Image , Dimensions} from "react-native";


class LocationPlanScreen extends Component {

  render(){
    return(
      <View style = { styles.container } > 
          <Image  source={require('../assets/divaeBuroPlan.png')} style={styles.image} />
      </View>
    );
  }
}

export default LocationPlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#565656',
  }, 
  image: {
    width: 300, 
    height: 400,
  }
});
