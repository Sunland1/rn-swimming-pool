import React from 'react';
import { StyleSheet, Text, View , ScrollView } from 'react-native';



const Exo_05 = () => {
    return (
          <ScrollView>
              <View style={styles.squareRed}></View>
              <View style={styles.squareBlue}></View>
              <View style={styles.squareRed}></View>
              <View style={styles.squareBlue}></View>
              <View style={styles.squareRed}></View>
              <View style={styles.squareBlue}></View>
              <View style={styles.squareRed}></View>
              <View style={styles.squareBlue}></View>
          </ScrollView>
      );
}



const styles = StyleSheet.create({
  

  squareRed: {
    marginBottom: 21,
    backgroundColor: "red",
    width: 300,
    height: 300,
  },

  squareBlue: {
    marginBottom: 21,  
    backgroundColor: "blue",
    width: 100,
    height: 100,
  },
});

export default Exo_05;