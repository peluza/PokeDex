import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite'
import { useEffect, useState } from 'react'

export default function Favorite(props) {
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined)
    const Icon = isFavorite ? FontAwesome : FontAwesome5
    console.log(isFavorite)
    useEffect(() => {
      (async () => {
        try {
          const response = await isPokemonFavoriteApi(id)
          setIsFavorite(response)
        } catch (error) {
          setIsFavorite(false)
        }
      })()
      return () => {

      }
    }, [id])
    const addFavorite = async () => {
        await addPokemonFavoriteApi(id)
    }

    const removeFavorite = () => {
      console.log("Eliminar de favoritos")
    }
  return (
    <Icon 
        name="heart" 
        color="#ffff"
        size={20} 
        onPress={isFavorite ? removeFavorite : addFavorite} 
        style={{ marginLeft: 280, marginTop: 100 }}
    />
  )
}