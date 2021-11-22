import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';



const Exo_04 = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Hello</Text>
          <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
      );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontSize: 22
  },

  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default Exo_04;