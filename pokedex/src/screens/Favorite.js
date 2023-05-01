import { Button, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { getPokemonsFavoriteApi } from '../api/favorite'

export default function Favorite() {

  const checkFavorite = async () => {
    const respose = await getPokemonsFavoriteApi()
    console.log(respose)

  }
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title='pokemon' onPress={checkFavorite} />
    </SafeAreaView>
  )
}