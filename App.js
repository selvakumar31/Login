import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home'
import Admin from './components/Admin'

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

const App = ()=>{
  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="admin" component={Admin} />
        

        </Stack.Navigator>
      </NavigationContainer>
  )
}



export default App;