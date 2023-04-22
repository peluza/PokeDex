import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FavoriteScreen from "../screens/Favorite"
import AccountScreen from '../screens/Account'
import PokeDexScreen from '../screens/PokeDex'

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Favorite" component={FavoriteScreen}/>
    <Tab.Screen name="PokeDex" component={PokeDexScreen}/>
    <Tab.Screen name="Account" component={AccountScreen}/>
  </Tab.Navigator>

  )
}