import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import Routes from "./src/Navigation/Route";
import store from "./src/redux/store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultdata } from "./src/redux/action";
import types from "./src/redux/types";
import {storeData} from "./src/redux/reducer"


function App() {
  // const dataGlobal= useSelector(state => state.myData)
  // console.log("data from global array in App component ",dataGlobal)

  useEffect(() => {
    // AsyncStorage.removeItem('userData')
    // alert("i am from App screen")
    getData()
  }, [])


  // const storeData = async (value) => {
  //   try {
  //     let myArray = [{ name: 'Blablabla bla' }, { name: "kdlkfjdkslfjkdkf" }]


  //     await AsyncStorage.setItem('userData', JSON.stringify(myArray))
  //     console.log("item saved succssfully.....")
  //   } catch (e) {
     
  //     console.log("error raised during saved item")
  //   }
  // }

  const getData = async () => {
    try {
      const res = await AsyncStorage.getItem('userData')
      console.log("my storage value", JSON.parse(res))

      if(!!res){
        store.dispatch(defaultdata({
          type: types.DEFAULTDATA,
          payload: JSON.parse(res)
        }))
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