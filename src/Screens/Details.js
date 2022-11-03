import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Styles } from './style'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { decrement, increment } from '../redux/action'

export default function Details({ navigation, route }) {
  let details = route.params
  const storeData = useSelector(state => state.myData)
  let index = storeData.findIndex(target => target.id == details.id)
  let targetval = storeData[index]
  const onInc = (targetval) => {
    store.dispatch(increment(targetval.quantity, targetval.id))
  }
  const onDec = (targetval) => {
    store.dispatch(decrement(targetval.quantity, targetval.id))
  }

  return (
    <View style={Styles.detailscreenview}>
      <Text>{details.title}</Text>
      <Text>{details.Data}</Text>
      {targetval.quantity>=1 ? <View style={Styles.bview}>
        <TouchableOpacity style={Styles.bstyle}
          onPress={() => onDec(targetval)} >
          <Text style={Styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text>  {targetval.quantity}</Text>
        <TouchableOpacity style={Styles.bstyle} onPress={() => onInc(targetval)}>
          <Text style={Styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
        : <View style={Styles.additembtnview}>
          <TouchableOpacity style={Styles.additembtn} onPress={() => onInc(targetval)}>
            <Text style={Styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>}
    </View>
  )
}