import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Home from "./components/Home";
import { ThemeProvider, useThemeContext } from './theme/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

/**
 * Wrap the entire app under a theme for better personalisation
 * @returns Themed App
 */
function ThemedApp() {
  const { theme } = useThemeContext();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar barStyle="light-content" />
      <Home />
    </SafeAreaView>
  );
}