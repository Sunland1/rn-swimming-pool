import React from 'react';
import { StyleSheet, View, Text , TouchableOpacity  , TextInput} from 'react-native';



const Exo_06 = () => {
    return(
        <View style={styles.container}>
            <TextInput
                    style={styles.input}
                    placeholder="useless placeholder"
            /> 
            <Text style={styles.text}>Hello</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  
    text: {
      fontSize: 22 
    }
  });



export default Exo_06;