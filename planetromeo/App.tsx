import React from "react";
import { StyleSheet } from "react-native";
import Home from "./components/Home";
import { ThemeProvider } from './theme/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';


/**
 * Wrap the entire app under a theme for better personalisation
 * @returns Themed App
 */
export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});