import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Exo_01 = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
        </View>
      );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 50 
  }
});

export default Exo_01;