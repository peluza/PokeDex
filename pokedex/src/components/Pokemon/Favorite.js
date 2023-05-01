import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonFavoriteApi } from '../../api/favorite'

export default function Favorite(props) {
    const { id } = props
    const addFavorite = async () => {
        await addPokemonFavoriteApi(id)
    }
  return (
    <Icon 
        name="heart" 
        color="#ffff"
        size={20} 
        onPress={addFavorite} 
        style={{ marginLeft: 280, marginTop: 100 }}
    />
  )
}