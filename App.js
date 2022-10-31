import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Routes from "./src/Navigation/Route";
import store from "./src/redux/store";

function App() {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  )
}


export default App