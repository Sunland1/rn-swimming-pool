import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';




const Exo_02 = () => {

    function pressIt(){
        console.log("Hello world")
    }

    return(
        <View style={styles.container}>
            <Button
                onPress={() => pressIt()}
                title="Button"
                color="blue"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });




export default Exo_02;