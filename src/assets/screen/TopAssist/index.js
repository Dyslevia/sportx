import * as React from 'react';
import { DataTable } from 'react-native-paper';  
import { TopAssistData } from '../../../../data';

const TopAssist= () => {
  return (
    <DataTable> 
    <DataTable.Header> 
      <DataTable.Title>Nama</DataTable.Title> 
      <DataTable.Title>Club</DataTable.Title> 
      <DataTable.Title>Assist</DataTable.Title> 
    </DataTable.Header> 
    {TopAssistData.map(item =>{
        return (
          <DataTable.Row key={item.id}> 
            <DataTable.Cell>{item.Nama}</DataTable.Cell> 
            <DataTable.Cell>{item.Klub}</DataTable.Cell> 
            <DataTable.Cell>{item.Assist}</DataTable.Cell> 
          </DataTable.Row> 
        )
      })}
    </DataTable> 
  )
}

export default TopAssist