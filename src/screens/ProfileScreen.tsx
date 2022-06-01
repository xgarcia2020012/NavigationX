import React, {useEffect, useState} from 'react';
import {View, Text, Image, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from '../../styles';
import Geolocation from '@react-native-community/geolocation';

const ProfileScreen = ({}) => {
  const [coords, setCoords] = useState({latitude: 0, longitude: 0});
  const requestLocation = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso ');
      Geolocation.getCurrentPosition(
        //Will give you the current location
        position => {
          //getting the Longitude from the location json
          const currentLongitude = JSON.stringify(position.coords.longitude);

          //getting the Latitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);
          console.log(currentLatitude, currentLongitude);

          setCoords({
            latitude: Number(currentLatitude),
            longitude: Number(currentLongitude),
          });
        },
        error => {},
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        },
      );
    } else {
      console.log('Permiso Denegado');
    }
  };
  useEffect(() => {
    requestLocation();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          ...coords,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coords} draggable={true} />
      </MapView>
    </View>
  );
};

export default ProfileScreen;
