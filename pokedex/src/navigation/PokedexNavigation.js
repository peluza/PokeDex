import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PokeDexScreen from '../screens/PokeDex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pokedex"
                component={PokeDexScreen}
                options={{title: "", headerTransparent: true}}
            />
            <Stack.Screen
                name="Pokemon"
                component={PokemonScreen}
                options={{title: "", headerTransparent: true}}
            />
        </Stack.Navigator>
    )
}