import React , {useEffect , useState } from 'react';
import { StyleSheet, View, Text , TouchableOpacity , ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FirstScreen = ({navigation}) => {
  

  const getFilms = async () => {
    const res = fetch('https://ghibliapi.herokuapp.com/films' , {
        method: "GET",
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    return await (await res).json()
  }

  const [films , setFilms ] = useState([])

  useEffect( async () => {
    setFilms(await getFilms())
  } , [] )

  return (
      <ScrollView>
        {films.map( (value , index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Info' , {film: value})}>
                <Text style={styles.text}>{value.title}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
  );
}


const SecondScreen = ({route,navigation}) => {
    const film = route.params.film
    return (
        <ScrollView>
             <View style={{ flex: 1, alignItems: 'center'}}>
                <Text style={styles.title}>Title : </Text>
                <Text style={{fontSize: 22}}>{film.title}</Text>

                <Text style={styles.title}>Description : </Text>
                <Text style={{fontSize: 22}}>{film.description}</Text>
                
                <Text style={styles.title}>Director : </Text>
                <Text style={{fontSize: 22}}>{film.director}</Text>

                <Text style={styles.title}>Release Date : </Text>
                <Text style={{fontSize: 22}}>{film.release_date}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
  });

const Stack = createNativeStackNavigator();
const Exo_13 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: "List of Films"}} name="ListOfFilms" component={FirstScreen} />
        <Stack.Screen name="Info" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Exo_13;