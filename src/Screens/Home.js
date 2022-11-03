import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Styles } from "./style";
import Navigationstrings from "../Navigation/Navigationstrings";
import { decrement, increment } from "../redux/action";
import store from "../redux/store";
import { useSelector } from "react-redux";
import colorpath from "../constants/colorpath";

const Home = ({ navigation, route }) => {
    const storeData = useSelector(state => state.myData)
    let arrlen = 0
    for (let i = 0; i < storeData.length; i++) {
        if (storeData[i].quantity > 0) {
            arrlen = arrlen + 1
        }
        else
            continue
    }
    const onInc = (item) => {
        store.dispatch(increment(item.quantity, item.id))
    }
    const onDec = (item) => {
        store.dispatch(decrement(item.quantity, item.id))
    }
    const renderItemfunc = ({ item, index }) => {
        return (
            <TouchableOpacity 
            onPress={() => { navigation.navigate(Navigationstrings.DETAILS, { id: item.id, title: item.Title, Data: item.data }) }} 
            style={Styles.flatstyle}>
                <Text>Title :{item?.Title}</Text>
                <Text>Data:{item.data}</Text>
                {item.quantity >= 1 ? <View style={Styles.bview}>
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
                        <TouchableOpacity style={Styles.additembtn} onPress={() => onInc(item)}>
                            <Text style={Styles.btnText}>ADD</Text>
                        </TouchableOpacity>
                    </View>}
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor:colorpath.WHITE }}>
            <FlatList
                data={storeData}
                renderItem={renderItemfunc}
            />
            <View style={Styles.itemcount}>
                <Text>Data on screen :{arrlen}</Text></View>
        </View>
    )
}
export default Home