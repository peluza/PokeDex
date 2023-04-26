import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from '../screens/Favorite'

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="favorite"
                component={FavoriteScreen}
                options={{title: "", headerTransparent: true}}
            />
        </Stack.Navigator>
    )
}