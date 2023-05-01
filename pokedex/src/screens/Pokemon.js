import { ScrollView, View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Icon from "react-native-vector-icons/FontAwesome5"
import Favorite from '../components/Pokemon/Favorite'
import useAuth from '../hooks/useAuth'

export default function Pokemon(props) {
  const { navigation, route: { params } } = props
  const [pokemon, setPokemon] = useState(null)
  const { auth } = useAuth()

  console.log(pokemon)
  const bgStyles = { backgroundColor: params.color, ...styles.bgStyles }

  useEffect(() => {
    navigation.setOptions({
      // headerRight: () => auth && <Favorite id={params.id}/>,
      // headerLeft: () => (
      //   <Icon
      //     name="arrow-left"
      //     color="#fff"
      //     size={20}
      //     style={{ marginLeft: 20, marginTop: 30 }}
      //     onPress={navigation.goBack}
      //   />
      // ),
      headerRight: () => null,
      headerLeft: () => null,
    })
  }, [navigation, params])

  useEffect(() => {
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
    <ScrollView>
      <View style={bgStyles}>
        <Icon
          name="arrow-left"
          color="#ffff"
          size={20}
          style={{ marginLeft: 20, marginTop: 100 }}
          onPress={navigation.goBack}
        />
        {auth && <Favorite id={params.id} />}
      </View>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name} />

      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bgStyles: {
    flexDirection: "row", 
    paddingVertical: 5, 
    alignItems: "center",
  }
})