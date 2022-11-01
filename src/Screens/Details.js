import { View, Text , TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from './style'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { decrement, increment } from '../redux/action'



export default function Details({navigation , route}) {
  let details=route.params
  console.log("details++++++++++ ", details)
  const storeData = useSelector(state => state.myData)
  let index=storeData.findIndex(target => target.id == details.id)
  useEffect(()=>{alert("i am details screen")},[storeData])
    const onInc = (details) => {
        store.dispatch(increment(details.quantity, details.id))
    }
    const onDec = (details) => {
        store.dispatch(decrement(details.quantity, details.id))
    }


  return (
    <View style={Styles.detailscreenview}>
      <Text>{details.title}</Text>
      <Text>{details.Data}</Text>
      {true? <View style={Styles.bview}>
                    <TouchableOpacity style={Styles.bstyle}
                        onPress={() => onDec(details)} >
                        <Text style={Styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text>  {details.quantity}</Text>
                    <TouchableOpacity style={Styles.bstyle} onPress={() => onInc(details)}>
                        <Text style={Styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                    : <View style={Styles.additembtnview}>
                        <TouchableOpacity style={Styles.additembtn} onPress={()=> onInc(details)}>
                            <Text style={Styles.btnText}>Add</Text>
                        </TouchableOpacity>
                    </View>}

    </View>
  )
}