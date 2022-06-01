import {StyleSheet} from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {width: 500, height: 500},
});

export default styles;
