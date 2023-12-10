import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import {useNavigation} from '@react-navigation/native';
const Item = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DetailMatch', {matchId: item.id})}>
                <View style={{flexDirection: 'row', gap:15, padding: 30, backgroundColor: '#FFF8D4', marginHorizontal: 10, borderRadius: 20, marginVertical: 10}}>
                    <View style={{flexDirection: 'row', gap: 10,}}>
                    <FastImage style={styles.image}
                    source={{uri: item?.image,
                    headers:{Authorization: 'someAuthToken'},
                    priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}/>
                    <View style={{flexWrap: 'wrap', flexDirection: 'column'}}>
                        <Text style={{fontSize : 20}}>{item?.pertandingan}</Text>
                        <Text style={{fontSize: 20}}>{item?.deskripsi}</Text>
                    </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 150
},
})