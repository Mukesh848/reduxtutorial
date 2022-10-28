import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Styles } from "./style";
import Navigationstrings from "../Navigation/Navigationstrings";
import { decrement, increment } from "../redux/action";
import store from "../redux/store";
import colorpath from "../constants/colorpath";

const Home = ({ navigation, route }) => {



    const [flatItem, setFlatItem] = useState(store.getState().state.myData)
    console.log("flat item", flatItem)

    useEffect(() => {

        const unsubscribe = store.subscribe(() => {
        
            let data = store.getState().state.myData
            console.log("data on home screen", data)
            setFlatItem(data)
        })
        return () => {
            unsubscribe()
        }
    }, [route?.params])
    const onInc = () => {
        store.dispatch(increment(flatItem.quantity))
    }
    const onDec = () => {

        store.dispatch(decrement(flatItem.quantity))
    }
    return (
        <View>
            <FlatList
                data={flatItem}
                renderItem={({ item, index }) => {
                    return (
                        <View style={Styles.flatstyle}>
                            <Text>Title :{item?.Title}</Text>
                            <Text>Data:{item.data}</Text>
                            {!!item.quantity!==0 ? <View style={Styles.bview}>
                                <Text onPress={() => { navigation.navigate(Navigationstrings.DETAILS) }}>check details</Text>
                                <TouchableOpacity style={Styles.bstyle} 
                                onPress={()=>{ store.dispatch(decrement(item.quantity,item.id))}} >
                                    <Text style={Styles.btnText}>-</Text>
                                </TouchableOpacity>
                                <Text>  {item.quantity}</Text>
                                <TouchableOpacity style={Styles.bstyle} onPress={()=>{ store.dispatch(increment(item.quantity , item.id))}}>
                                    <Text style={Styles.btnText}>+</Text>
                                </TouchableOpacity>
                            </View>
                                : <View style={Styles.additembtnview}>
                                    <TouchableOpacity style={Styles.additembtn}>
                                        <Text style={Styles.btnText}>Add item</Text>
                                    </TouchableOpacity>
                                </View>}
                        </View>
                    )
                }}
            />
        </View>
    )
}
export default Home