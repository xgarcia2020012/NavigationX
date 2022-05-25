import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles';

const SettingScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Configuracion</Text>

      <Image
        style={styles.image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        }}
      />
    </View>
  );
};

export default SettingScreen;
