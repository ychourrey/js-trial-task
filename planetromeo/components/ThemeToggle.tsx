import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useThemeContext } from '../theme/ThemeProvider';
import { Feather } from '@expo/vector-icons';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={toggleTheme} style={styles.button} accessibilityLabel="Toggle theme">
        <Feather name={isDark ? 'moon' : 'sun'} size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 99,
  },
  button: {
    backgroundColor: '#00000088',
    borderRadius: 20,
    padding: 8,
  },
});