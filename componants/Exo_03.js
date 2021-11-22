import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import { useState } from 'react';



const Exo_03 = () => {

    const [count , setCount ] = useState(0)


    return (
        <View style={styles.container}>
          <Text style={styles.countStyle}>{count}</Text>
          <Button
            onPress={() => setCount( count + 1 )}
            title="Button"
            color="blue"
          />
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

  countStyle : {
      fontSize: 34
  }
});

export default Exo_03;