import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useThemeContext } from '../../theme/ThemeProvider';

const Header = () => {
  const { theme } = useThemeContext();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: '#4AB1F1' }]}>
        Romeo
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
export default Header;
