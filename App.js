import * as React from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { TopAssist,Klasemen,TopScore } from './src/assets/screen';

export default function App() {
  return (
      <View>
      <Image
        source={require('./src/assets/img/Bundesliga.png')} 
        styles={styles.pict}
        />
        <ScrollView>
          <Klasemen/>
        </ScrollView>
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
