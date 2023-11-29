import React from 'react';  
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { DataTable } from 'react-native-paper';  
import { TopScoresData } from '../../../../data';

const TopScores= () => {
  return (
    <View>
    <Image
      source={require('../../img/Bundesliga.png')}  
      styles={styles.pict}
      />
      <ScrollView>
      <DataTable> 
    <DataTable.Header> 
      <DataTable.Title>Nama</DataTable.Title> 
      <DataTable.Title>Club</DataTable.Title> 
      <DataTable.Title>Goal</DataTable.Title> 
    </DataTable.Header> 
    {TopScoresData.map(item =>{
        return (
            <DataTable.Row key={item.id}> 
              <DataTable.Cell>{item.Nama}</DataTable.Cell> 
              <DataTable.Cell>{item.Klub}</DataTable.Cell> 
              <DataTable.Cell>{item.Goal}</DataTable.Cell> 
            </DataTable.Row>    
        )
      })}
    </DataTable> 
      </ScrollView>
    </View>
  )
}

export default TopScores
const styles = StyleSheet.create({ 
  container: { 
    padding: 15, 
  }, 
  tableHeader: { 
    backgroundColor: '#DCDCDC', 
  },
  pict: {
    width:100,
    height:100,
  } 
});