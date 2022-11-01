import types from "./types";

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
    console.log("data in reducer", action.payload)
    switch (action.type) {
        case types.INCREMENT: {

            let data = action.payload.quantity
            let mainArr = [...state.myData]
            console.log("data in the increment function", mainArr)
            let index = mainArr.findIndex(target => target.id == action.payload.id)
            console.log("index of the target data in increment function", index)

            if (index >= 0) { mainArr[index].quantity = data + 1 }
            return { ...state, myData: mainArr }
        }
        case types.DECREMENT: {
            let data = action.payload.quantity
            let mainArr = [...state.myData]
            console.log("data in the decrement function", mainArr)
            let index = mainArr.findIndex(target => target.id === action.payload.id)
            console.log("index of the target data in decrement function", index)
            if (index >= 0) { mainArr[index].quantity = data - 1 }
            return { ...state, myData: mainArr }
        }
        default:
            return { ...state }
    }
}