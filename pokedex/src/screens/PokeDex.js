import { SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getPokemonApi } from '../api/pokemon'

export default function PokeDex() {
  useEffect(() =>{
    (async () => {
      await loadPokemons()
    })()

  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  } 

  return (
    <SafeAreaView>
      <Text>PokeDex</Text>
    </SafeAreaView>
  )
}