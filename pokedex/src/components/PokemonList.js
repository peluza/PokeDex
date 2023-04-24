import { StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
    const { pokemons, loadPokemons, isNext } = props
    const loadMore = () => {
      loadPokemons()
    }
  return (
    <FlatList 
    data={pokemons}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    keyExtractor={(pokemon) => String(pokemon.id)}
    renderItem={({item}) => <PokemonCard pokemon={item} />}
    contentContainerStyle={styles.flatListContentContainer}
    onEndReached={isNext && loadMore}
    onEndReachedThreshold={0.1}
    ListFooterComponent={
      isNext && (
        <ActivityIndicator 
      size="large"
      style={styles.spinner}
      color="#aeaeae"
      />
      )
    }
    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner: {
      marginTop: 20,
      marginBottom: 60
    }
})