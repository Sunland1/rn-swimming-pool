import React, { useState, useEffect } from 'react';
import {StyleSheet , View, Text, Button , TouchableOpacity} from 'react-native';

import * as Location from 'expo-location'
import MapView , {Marker} from 'react-native-maps';



const Exo_11 = () => {

    const [initMap , setInitMap] = useState(null);
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
        setInitMap({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })

    } , [])

    function inserMarker(coordinate){
        markers.push({
            latlng: coordinate
        })
        setMarkers(markers)
    }


    return(
        <MapView 
            style={styles.map} 
            initialRegion={initMap}
            onLongPress={(e) => {inserMarker(e.nativeEvent.coordinate)}}
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




export default Exo_11;