import {StyleSheet} from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 400,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {width: 500, height: 500},

  buscador: {height: 50},
  text: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5},
});

export default styles;
