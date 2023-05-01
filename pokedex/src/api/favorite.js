import AsyncStorage from "@react-native-async-storage/async-storage"
import { includes, pull } from "lodash"
import { FAVORITE_STORAGE } from "../utils/constants"


export async function getPokemonsFavoriteApi() {
    try {
        const respose = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(respose || '[]')
    } catch (error) {
        throw error
    }
}

export async function addPokemonFavoriteApi(id) {
    try {
        const favorites = await getPokemonsFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
        console.log()
    } catch (error) {
        throw error
    }
}