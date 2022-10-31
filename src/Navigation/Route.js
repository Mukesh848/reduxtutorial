import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Navigationstrings from './Navigationstrings';

import Home from '../Screens/Home';
import Details from "../Screens/Details"

const Stack = createNativeStackNavigator()

const Routes =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Navigationstrings.HOME} component={Home}/>
                <Stack.Screen name={Navigationstrings.DETAILS} component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
