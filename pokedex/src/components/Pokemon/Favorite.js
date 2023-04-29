import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorite(props) {
    const { id } = props
    const addFavorite = () => {
        console.log("Añadir a favoritos", id)
    }
  return (
    <Icon 
        name="heart" 
        color="#ffff" 
        size={20} 
        onPress={addFavorite} 
        style={{ marginRight: 20, marginTop: 30 }}
    />
  )
}