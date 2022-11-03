import React, { useEffect } from "react";
import { Provider} from "react-redux";
import Routes from "./src/Navigation/Route";
import store from "./src/redux/store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultdata } from "./src/redux/action";

function App() {
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await AsyncStorage.getItem('userData')
      if(!!res){
        store.dispatch(defaultdata(JSON.parse(res)))
      }
    } catch (error) {
      console.log("error rasied", error)
    }
  }

  return (
    <Provider store={store}>
      <Routes />

    </Provider>
  )
}

export default App