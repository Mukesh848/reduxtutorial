import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "./store";
import types from "./types";


export const storeData = async (mainArr) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(mainArr))
      console.log("item saved succssfully.....")
    } catch (e) {
     
      console.log("error raised during saved item")
    }
  }

let init_state = {
    myData: [
        {
            id: 1,
            Title: 'HI ',
            data: 'First data',
            quantity: 0
        },
        {
            id: 2,
            Title: 'HI ',
            data: 'Second data',
            quantity: 0
        },
        {
            id: 3,
            Title: 'HI ',
            data: 'Third data',
            quantity: 0
        }
    ]
}

export function counterReducer(state = init_state, action) {
   
    switch (action.type) {
        case types.INCREMENT: {

            let data = action.payload.quantity
            let mainArr = [...state.myData]
            let index = mainArr.findIndex(target => target.id == action.payload.id)
            if (index >= 0) { mainArr[index].quantity = data + 1 }
            storeData(mainArr)
            return { ...state, myData: mainArr }
        }
        case types.DECREMENT: {
            let data = action.payload.quantity
            let mainArr = [...state.myData]
            let index = mainArr.findIndex(target => target.id === action.payload.id)
            if (index >= 0) { mainArr[index].quantity = data - 1 }
            storeData(mainArr)
            return { ...state, myData: mainArr }
        }
        case types.DEFAULTDATA: {
            let data=action.payload.payload
            console.log('data in reducer ==========',data)
            let mainArr = [...state.myData]
            // for( let i; i<mainArr.length ; i++){
                // mainArr[i].quantity=data[i].quantity
                // console.log("**********",hello)
            // }
            mainArr[0].quantity=data[0].quantity
                mainArr[1].quantity=data[1].quantity
                mainArr[2].quantity=data[2].quantity
            console.log("data after modification",mainArr)
            storeData(mainArr)
            return { ...state, myData: mainArr }
        }
        default:
            return { ...state }
    }
}