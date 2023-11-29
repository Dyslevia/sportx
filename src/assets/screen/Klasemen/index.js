import React, {useRef} from 'react';
import { ScrollView, View, StyleSheet, Image, Animated } from 'react-native';
import { DataTable } from 'react-native-paper';
import {SearchNormal1} from 'iconsax-react-native';  
import { KlasemenData } from '../../../../data';
import {useNavigation} from '@react-navigation/native';
import { Text } from 'react-native-svg';

const Klasemen = () => {
  const navigation = useNavigation();
  const handleNavigateToItemDetail = () => {
      navigation.navigate('ItemDetail');
  };
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 142);
  const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
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