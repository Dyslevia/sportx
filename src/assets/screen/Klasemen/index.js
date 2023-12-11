import React, {useRef,useState,useCallback} from 'react';
import { DataTable } from 'react-native-paper';
import {SearchNormal1,Category2} from 'iconsax-react-native';  
import { KlasemenData } from '../../../../data';
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import { Image,ScrollView, StyleSheet, Text, TouchableOpacity,ActivityIndicator, View, Animated } from 'react-native';
import Item from '../../../../components/Item';
import axios from 'axios';

const Klasemen = () => {
  const navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    const [loading, setLoading] = useState(true);
    const [matchData, setMatchData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const getMatchData = async () => {
      try {
        const response = await axios.get(
          'https://6575788db2fbb8f6509d1f41.mockapi.io/sportxapp/match',
        );
        setMatchData(response.data);
        setLoading(false)
      } catch (error) {
          console.error(error);
      }
    };
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        getMatchData()
        setRefreshing(false);
      }, 1500);
    }, []);
  
    useFocusEffect(
      useCallback(() => {
        getMatchData();
      }, [])
    );
  return (
    <View>
      <Animated.View style={[styles.header, { transform: [{ translateY: recentY }] }]}>
      <Image
        source={require('../../img/Bundesliga.png')} 
        styles={styles.pict}
        />
      </Animated.View>
        <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingTop: -1 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Animated.View style={{padding: 20,marginVertical: 10,borderRadius: 14,backgroundColor: 'white',marginHorizontal: 8,transform: [{translateY: recentY}]}}>
            <Text>Cari...</Text>
        </Animated.View>
      </TouchableOpacity>
      <View style={{gap: 20}}>
          {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                matchData.map((item, index) => <Item item={item} key={index}/>)
              )}
        </View>
        <View>
        <DataTable> 
    <DataTable.Header> 
      <DataTable.Title>No</DataTable.Title> 
      <DataTable.Title>Klub</DataTable.Title> 
      <DataTable.Title></DataTable.Title> 
      <DataTable.Title>M</DataTable.Title> 
      <DataTable.Title>M</DataTable.Title> 
      <DataTable.Title>S</DataTable.Title> 
      <DataTable.Title>K</DataTable.Title>
      <DataTable.Title>P</DataTable.Title>  
    </DataTable.Header> 
    {KlasemenData.map(item =>{
        return (
          <DataTable.Row key={item.id}> 
            <DataTable.Cell>{item.No}</DataTable.Cell> 
            <DataTable.Cell>{item.Klub}</DataTable.Cell> 
            <DataTable.Cell>
              <View styles={styles.pict}>
                <Image source={item.image}/>
              </View>
            </DataTable.Cell> 
            <DataTable.Cell>{item.Match}</DataTable.Cell> 
            <DataTable.Cell>{item.Win}</DataTable.Cell> 
            <DataTable.Cell>{item.Draw}</DataTable.Cell> 
            <DataTable.Cell>{item.Lose}</DataTable.Cell>
            <DataTable.Cell>{item.Point}</DataTable.Cell> 
          </DataTable.Row>
        )
      })}
    </DataTable>
        </View>
    <TouchableOpacity style={{padding: 20, position:'absolute', top: 630,right: 20, backgroundColor:'#252727',borderRadius: 20}} onPress={() => navigation.navigate("AddMatch")}>
        <Category2 size="29"  color="#F7F7F7" variant='Bold'/>
    </TouchableOpacity> 
        </Animated.ScrollView>
      </View>
  )
}

export default Klasemen

const styles = StyleSheet.create({ 
  pict: {
    width:'5%',
    height:5,
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
    zIndex: 999,
    elevation: 1000,
    marginBottom: 35,
    marginTop: 40,
  }, 
});