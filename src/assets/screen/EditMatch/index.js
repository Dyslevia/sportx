import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect, } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore'

const EditMatch = ({route}) => {
  const {matchId} = route.params;
    const [matchData, setmatchData] = useState({
        pertandingan: '',
        deskripsi: '',
        score: '',
        totalLikes: 0,
        totalComments: 0,
      });
      const handleChange = (key, value) => {
        setmatchData({
          ...matchData,
          [key]: value,
        });
      };
      const [image, setImage] = useState(null);
      const navigation = useNavigation();
      const [oldImage, setOldImage] = useState(null);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const subscriber = firestore()
          .collection('item')
          .doc(matchId)
          .onSnapshot(documentSnapshot => {
            const matchData = documentSnapshot.data();
            if (matchData) {
              console.log('Match data: ', matchData);
              setmatchData({
                pertandingan: matchData.pertandingan,
                deskripsi: matchData.deskripsi,
                score: matchData.score,
              });
              setOldImage(matchData.image);
              setImage(matchData.image);
              setLoading(false);
            } else {
              console.log(`Item with ID ${matchId} not found.`);
            }
          });
        setLoading(false);
        return () => subscriber();
      }, [matchId]);
    
      const handleImagePick = async () => {
        ImagePicker.openPicker({
          width: 1920,
          height: 1080,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            setImage(image.path);
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`images/${filename}`);
        try {
          if (image !== oldImage && oldImage) {
            const oldImageRef = storage().refFromURL(oldImage);
            await oldImageRef.delete();
          }
          if (image !== oldImage) {
            await reference.putFile(image);
          }
          const url =
            image !== oldImage ? await reference.getDownloadURL() : oldImage;
          await firestore().collection('item').doc(matchId).update({
            pertandingan: matchData.pertandingan,
            deskripsi: matchData.deskripsi,
            image: url,
            score: matchData.score,
          });
          setLoading(false);
          console.log('Item Updated!');
          navigation.navigate('Klasemen', {matchId});
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <View style={{flex: 1,}}>
            <View style={{flexDirection: 'row',alignItems: 'center',padding: 20, justifyContent:'flex-end', gap: 28}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#2D2C2C"/>
                    </TouchableWithoutFeedback>
                </View>
            <ScrollView>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Pertandingan"
                    value={matchData.pertandingan}
                    onChangeText={(text) => handleChange("pertandingan", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="Deskripsi"
                    value={matchData.deskripsi}
                    onChangeText={(text) => handleChange("deskripsi", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="score."
                    value={matchData.score}
                    onChangeText={(text) => handleChange("score", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.boardDescription}>
                    <TextInput
                    placeholder="URL."
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
            {loading && (
            <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="blue" />
            </View>
            )}
        </View>
  )
}

export default EditMatch
const styles = StyleSheet.create({
  buttonUpload:{
      backgroundColor: '#3693F4',
      padding: 15, 
      flexDirection: 'row',
      alignItems: 'center', 
      gap: 12, 
      marginHorizontal: 120, 
      borderRadius: 14, 
      position: 'absolute', 
      top: 670,
      left:192
  }
})
const textInput = StyleSheet.create({
  title:{
      fontSize: 14,
      color: 'black'
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