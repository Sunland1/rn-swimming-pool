import * as React from 'react';
import { StyleSheet, View, Text , TouchableOpacity , TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FirstScreen = ({navigation}) => {
  
  const [text, onChangeText] = React.useState("");
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="useless placeholder"
        /> 
        <TouchableOpacity onPress={() => navigation.navigate('Second' , {textValue: text})} >
                <Text style={styles.text}>NextPage</Text>
        </TouchableOpacity>
    </View>
  );
}


const SecondScreen = ({route, navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{route.params.textValue}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} >
            <Text style={styles.text}>GoBack</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
      color: "blue"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });

const Stack = createNativeStackNavigator();
const Exo_08 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Exo_08;