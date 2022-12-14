import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator ,BlurView} from '@react-navigation/native-stack';
import React from 'react';
import Navigationstrings from './Navigationstrings';
import Home from '../Screens/Home';
import Details from "../Screens/Details"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab= createBottomTabNavigator()
const Routes =()=>{
    return(
        <NavigationContainer>
          <Tab.Navigator>
                <Tab.Screen name={Navigationstrings.HOME} component={Home} />
                <Tab.Screen name={Navigationstrings.DETAILS} component={Details} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Routes
