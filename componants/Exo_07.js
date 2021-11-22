import React from 'react';
import { StyleSheet, View, Text , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FirstScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Second')} >
        <Text style={styles.text}>FirstPage</Text>
      </TouchableOpacity>
    </View>
  );
}


const SecondScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('First')} >
            <Text style={styles.text}>SecondPage</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
      color: "blue"
    }
  });

const Stack = createNativeStackNavigator();
const Exo_07 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Exo_07;