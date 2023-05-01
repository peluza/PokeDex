import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite'
import { useEffect, useState } from 'react'

export default function Favorite(props) {
    const { id } = props
    const [isFavorite, setIsFavorite] = useState(undefined)
    const Icon = isFavorite ? FontAwesome : FontAwesome5
    const [reloadCheck, setReloadCheck] = useState(false)

    const onReloadCheckFavorite = () => {
      setReloadCheck((prev) => !prev)
    }

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
    }, [id, reloadCheck])
    const addFavorite = async () => {
      try {
        await addPokemonFavoriteApi(id)
        onReloadCheckFavorite()
      } catch (error) {
        console.error(error)
      }
        
    }

    const removeFavorite = async () => {
      try {
        await removePokemonFavoriteApi(id)
        onReloadCheckFavorite()
      } catch (error) {
        console.error(error)
      }
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