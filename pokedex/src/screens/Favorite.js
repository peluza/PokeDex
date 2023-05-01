import { Text } from 'react-native'
import React, { useState,  useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getPokemonsFavoriteApi } from '../api/favorite'
import useAuth from '../hooks/useAuth'
import { getPokemonDetailsApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'



export default function Favorite() {

  const [pokemons, setPokemons] = useState([])
  const { auth } = useAuth()

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi()
          const pokemonsArray = []
  
          for await (const pokemon of response) {
            const pokemonDetails = await getPokemonDetailsApi(pokemon);
  
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image: pokemonDetails.sprites.other["official-artwork"].front_default,
            })
          }
          setPokemons(pokemonsArray)
        })()
      }
  
    }, [auth]))


  return (
    !auth ? (
      <Text>Usurio no logueado</Text>
    ) : (
      <PokemonList pokemons={pokemons} />
    )
  )
}