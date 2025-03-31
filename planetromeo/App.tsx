import React from "react";
import { SafeAreaView } from "react-native";
import Home from "./components/Home";

export default function App(){
  return (
    <SafeAreaView style={{ flex:1}}>
      <Home />
    </SafeAreaView>
  )
}