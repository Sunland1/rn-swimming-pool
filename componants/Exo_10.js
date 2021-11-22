import React, { useState, useEffect } from 'react';
import {StyleSheet , View, Text, Button } from 'react-native';
import * as Location from 'expo-location'




const Exo_10 = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    //when componants is build ,  we need to request permission to Locate user  
    useEffect( () => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })()
    })

    async function getLocation(){
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }


    return(
        <View style={styles.container}>
          <Text style={styles.text}>Longitude : {location === null ? 0 : location.coords.longitude}</Text>
          <Text style={styles.text}>Latitude : {location === null ? 0 : location.coords.latitude}</Text>

          <Button
            onPress={() => getLocation()}
            title="Get Location"
          />
          <Button
            onPress={() => setLocation(null)}
            title="Reset location"
          />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      fontSize: 22
    }
  });



export default Exo_10