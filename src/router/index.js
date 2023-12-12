import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Home2, Avalanche, Profile2User, ShoppingCart, Rank, PresentionChart, Star, Add } from 'iconsax-react-native';
import React from 'react'
import { Klasemen,TopAssist,TopScore,AddMatch,Search,EditMatch,DetailMatch,Register,Login } from '../assets/screen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Klasemen" component={Klasemen} options={{
          tabBarLabel: 'Klasemen',
          tabBarIcon: ({focused, color}) => (
            <Rank
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="TopAssist" component={TopAssist} options={{
          tabBarLabel: 'TopAssist',
          tabBarIcon: ({focused, color}) => (
            <PresentionChart
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="TopScore" component={TopScore} options={{
          tabBarLabel: 'TopScore',
          tabBarIcon: ({focused, color}) => (
            <Star
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
      </Tab.Navigator>
  )
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="AddMatch" component={AddMatch} options={{ headerShown: false }} />
      <Stack.Screen name="EditMatch" component={EditMatch} options={{ headerShown: false }} />
      <Stack.Screen name="DetailMatch" component={DetailMatch} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}
export default Router
const styles = StyleSheet.create({})