import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles';

const ProfileScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Inicio</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg',
        }}
      />
    </View>
  );
};

export default ProfileScreen;
