import React from 'react'
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import FavoriteNavigation from "./FavoriteNavigation"
import AccountNavigation from './AccountNavigation'
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='PokeDex'>
      <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        ),
        title: "Favoritos",
      }
      } />
      <Tab.Screen name="PokeDex" component={PokedexNavigation} options={
        {
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBall(),
          title: "",
          headerTransparent: true
        }
      } />
      <Tab.Screen name="Account" component={AccountNavigation} options={{
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
        title: "Mi Cuenta"
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