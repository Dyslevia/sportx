import React from 'react';  
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { DataTable } from 'react-native-paper';  
import { TopScoresData } from '../../../../data';

const TopScores= () => {
  return (
    <DataTable> 
    <DataTable.Header> 
      <DataTable.Title>No</DataTable.Title> 
      <DataTable.Title>Nama</DataTable.Title> 
      <DataTable.Title>Club</DataTable.Title> 
      <DataTable.Title>Goal</DataTable.Title> 
    </DataTable.Header> 
    {TopScoresData.map(item =>{
        return (
            <DataTable.Row key={item.id}> 
              <DataTable.Cell>{item.No}</DataTable.Cell> 
              <DataTable.Cell>{item.Nama}</DataTable.Cell> 
              <DataTable.Cell>{item.Klub}</DataTable.Cell> 
              <DataTable.Cell>{item.Goal}</DataTable.Cell> 
            </DataTable.Row>    
        )
      })}
    </DataTable> 
  )
}

export default TopScores