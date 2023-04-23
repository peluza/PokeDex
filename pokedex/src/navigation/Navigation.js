import React from 'react'
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteScreen from "../screens/Favorite"
import AccountScreen from '../screens/Account'
import PokeDexScreen from '../screens/PokeDex'

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        )
      }
      } />
      <Tab.Screen name="PokeDex" component={PokeDexScreen} options={
        {
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall()
          
        }
      } />
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>

  )
}

function renderPokeBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  )
}