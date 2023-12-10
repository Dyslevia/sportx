import { useNavigation,useFocusEffect } from "@react-navigation/native";
import { SearchNormal1,Notification, AddCircle } from "iconsax-react-native";
import React, { useState,useCallback,useRef } from "react";
import axios from 'axios';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
const AddMatch = () => {
    const [loading, setLoading] = useState(false);
    const [matchData, setmatchData] = useState({
        pertandingan: "",
        deskripsi: "",
        score: "",
        createdAt: '',
        totalLikes: 0,
        totalComments: 0,
    });
    const handleUpload = async () => {
        setLoading(true);
        try {
          await axios.post('https://6575788db2fbb8f6509d1f41.mockapi.io/sportxapp/match', {
              pertandingan: matchData.pertandingan,
              deskripsi: matchData.deskripsi,
              score: matchData.score,
              image,
              totalComments: matchData.totalComments,
              totalLikes: matchData.totalLikes,
              createdAt: new Date(),
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Klasemen');
        } catch (e) {
          console.log(e);
        }
      };
    const handleChange = (key, value) => {
        setmatchData({
        ...matchData,
        [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
             <View style={{flexDirection: 'row',alignItems: 'center',padding: 25, justifyContent:'flex-end', gap: 28,backgroundColor: '#252727'}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#F7F7F7"variant="Linear"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#F7F7F7" variant="Linear"/>
                    </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Pertandingan."
                    value={matchData.pertandingan}
                    onChangeText={(text) => handleChange("pertandingan", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Deskripsi."
                    value={matchData.deskripsi}
                    onChangeText={(text) => handleChange("deskripsi", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Skor Pertandingan."
                    value={matchData.score}
                    onChangeText={(text) => handleChange("score", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL Image."
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
                <AddCircle variant="Linear" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddMatch

const styles = StyleSheet.create({})
const textInput = StyleSheet.create({
    title:{
        fontSize: 20,
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})