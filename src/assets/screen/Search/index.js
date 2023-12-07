import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../../../../components/searchBar'

const Search = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    return (
        <View>
        <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}/>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})