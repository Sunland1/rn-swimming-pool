import React, { useState, useEffect } from 'react';
import {StyleSheet , View, Text, Button , TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Location from 'expo-location'
import MapView , {Marker} from 'react-native-maps';



const Exo_12 = () => {


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('markers')
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch(e) {
            console.log(error)
        }
    }

    

    const [defaultMap , setDefaultMap] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [markers , setMarkers] = useState([])

    //when componants is build ,  we need to request permission to Locate user  
    useEffect( async () => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })()
        let location = await Location.getCurrentPositionAsync({});
        setDefaultMap({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
    },[])

    function insertMarker(coordinate){
        markers.push({
            latlng: coordinate
        })
        setMarkers(markers)
    }


    return(
        <MapView 
            style={styles.map} 
            initialRegion={defaultMap}
            onLongPress={(e) => {insertMarker(e.nativeEvent.coordinate)}}
        >
            {markers.map(   (marker,index) => (
                <Marker
                    key={index}
                    coordinate={marker.latlng}
                />
            ))}
        </MapView>
    )

}

const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });




export default Exo_12;