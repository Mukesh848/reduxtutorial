import types from "./types";
let init_state = {
    myData:[
        {id:1,
        Title:'HI ',
         data:'first data', 
         quantity :0
        },
        {
        id:2,
        Title:'HI ',
         data:'second data',
          quantity:0
        }
    ]
}
let arr=init_state.myData

export function counterReducer(state = init_state, action) {
 
    console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.INCREMENT: {
            let data = action.payload.quantity
            console.log("array",state.myData)
            // let index=state.myData.findIndex(target => target.id !== action.payload.id)
            const newArr=[...state.myData];
            console.log("data in new array",newArr)
            newArr[index].quantity=data+1
            return {...state,myData:newArr }
        }
        case types.DECREMENT: {
            let data = action.payload.quantity
            // let index=state.myData.findIndex(target => myData.id !== action.payload.id)
            const newArr=[...state.myData];
            newArr[index].quantity=data-1
            return {...state,myData:newArr }
        }
        default:
            return {state}
    }
}