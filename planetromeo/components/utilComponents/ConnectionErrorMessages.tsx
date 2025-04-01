import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConnectionErrorMessage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Well, this is awkward. Our connection dipped out for a quick hookup.</Text>
    <Text style={styles.sub}>We are lighting candles and wooing it back now</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },
  sub: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});

export default ConnectionErrorMessage;