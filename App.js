import React from "react";
import {View , Text , StyleSheet, SafeAreaView} from "react-native";
import { create } from "react-test-renderer";
import Routes from "./src/Navigation/Route";


function App(){
  return(
   <SafeAreaView style={Style.container}>
    <Routes/>
    </SafeAreaView>
  )
}

const Style = StyleSheet.create(
{  container:
  {
    flex:1,
  
  }
}
)
 
export default App