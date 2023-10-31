import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { KlasemenData } from './data';

export default function App() {
  return (
    <View>
    <Image
    source={require('./src/assets/img/Bundesliga.png')} 
    styles={styles.pict}
    />
    <DataTable style={styles.container}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title>No</DataTable.Title> 
        <DataTable.Title>Klub</DataTable.Title> 
        <DataTable.Title>M</DataTable.Title> 
        <DataTable.Title>M</DataTable.Title> 
        <DataTable.Title>S</DataTable.Title> 
        <DataTable.Title>K</DataTable.Title>
        <DataTable.Title>P</DataTable.Title>  
      </DataTable.Header> 

      {KlasemenData.slice(0, 17).map((item) => (
        <DataTable.Row key={item.id}> 
          <DataTable.Cell>{item.No}</DataTable.Cell> 
          <DataTable.Cell>{item.Klub}</DataTable.Cell> 
          <DataTable.Cell>{item.Match}</DataTable.Cell> 
          <DataTable.Cell>{item.Win}</DataTable.Cell> 
          <DataTable.Cell>{item.Draw}</DataTable.Cell> 
          <DataTable.Cell>{item.Lose}</DataTable.Cell>
          <DataTable.Cell>{item.Point}</DataTable.Cell> 
        </DataTable.Row>
      ))}
    </DataTable>
    </View>
  );
};
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
