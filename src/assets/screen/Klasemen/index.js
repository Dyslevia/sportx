import React from 'react';  
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { DataTable } from 'react-native-paper';  
import { KlasemenData } from '../../../../data';

const Klasemen = () => {
  return (
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
  )
}

export default Klasemen

const styles = StyleSheet.create({ 
  pict: {
    width:'5%',
    height:10,
  } 
});