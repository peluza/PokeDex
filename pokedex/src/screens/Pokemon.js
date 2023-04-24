import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon'

export default function Pokemon(props) {
  const { navigation, route: { params } } = props
  console.log(params.id)
  const [ pokemon, setPokemon] = useState(null)

  useEffect(()=> {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
    
  }, [params])

  if (!pokemon) return null
  return (
    <View>
      <Text>Pokemon</Text>
      <Text>{pokemon.name}</Text>
    </View>
  )
}