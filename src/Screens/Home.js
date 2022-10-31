import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Styles } from "./style";
import Navigationstrings from "../Navigation/Navigationstrings";
import { decrement, increment } from "../redux/action";
import store from "../redux/store";
import { useSelector } from "react-redux";

const Home = ({ navigation, route }) => {

    const storeData = useSelector(state => state.myData)

    const onInc = (item) => {
        store.dispatch(increment(item.quantity, item.id))
    }
    const onDec = (item) => {
        store.dispatch(decrement(item.quantity, item.id))
    }

    const renderItemfunc = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { navigation.navigate(Navigationstrings.DETAILS) }} style={Styles.flatstyle}>
                <Text>Title :{item?.Title}</Text>
                <Text>Data:{item.data}</Text>
                {true ? <View style={Styles.bview}>
                    <TouchableOpacity style={Styles.bstyle}
                        onPress={() => onDec(item)} >
                        <Text style={Styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text>  {item.quantity}</Text>
                    <TouchableOpacity style={Styles.bstyle} onPress={() => onInc(item)}>
                        <Text style={Styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                    : <View style={Styles.additembtnview}>
                        <TouchableOpacity style={Styles.additembtn}>
                            <Text style={Styles.btnText}>Add item</Text>
                        </TouchableOpacity>
                    </View>}
            </TouchableOpacity>
        )
    }

    return (
        <View  style={{ flex: 1 }}>
            <FlatList
                data={storeData}
                renderItem={renderItemfunc}
                extraData={storeData}
            />
        </View>
    )
}
export default Home