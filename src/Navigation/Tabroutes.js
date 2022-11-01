import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import Details from "../Screens/Details";
import Home from "../Screens/Home";
import Navigationstrings from "./Navigationstrings";


const Tab= createBottomTabNavigator()
function Tabroutes() {
    return (
        
            <Tab.Navigator>
                <Tab.Screen name={Navigationstrings.HOME} component={Home} />
                <Tab.Screen name={Navigationstrings.DETAILS} component={Details} />
            </Tab.Navigator>
        
    )
}

export default Tabroutes()