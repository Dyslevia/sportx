import { SearchNormal,Add } from 'iconsax-react-native';
import React, { useEffect,useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Animated } from 'react-native';

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View style={[styles.container,{
      gap: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 12],
        }),
      },]}>
      <Animated.View style={[styles.content,{
          transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [0, 1.2, 1],
                }),
              },
            ],
          }]}>
      <TouchableOpacity>
          <SearchNormal size="18"  color="#2D2C2C" style={styles.icon}/>
      </TouchableOpacity>
      <TextInput
        style={{ marginLeft: 1, flex: 1,marginVertical: 2, }} // Style untuk TextInput
        placeholder="Search" value={searchPhrase} onChangeText={setSearchPhrase} borderWidth={0}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        autoFocus={true}
      />
      {searchPhrase && (
          <TouchableOpacity onPress={() => setSearchPhrase("")}>
          <View style={{marginLeft: -38}}>
            <Add
              size={18}
              color={'black'}
              variant="Linear"
              style={{ transform: [{ rotate: "45deg" }] }}
            />
          </View>
        </TouchableOpacity>
      )}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  content:{
    flexDirection: 'row', 
    alignItems: 'center' ,
  },
  icon: {
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 35,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    backgroundColor: 'white',
  },
});

export default SearchBar;