import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navegaciones/StackNavigation1'
import BottomTabNavigator1 from './Navegaciones/BottomTabNavigator1';
import TopTabNavigator1 from './Navegaciones/TopTabNavigator1'
import DrawerNavigator1 from './Navegaciones/DrawerNavigator1';

export default function App() {
  return (
      <NavigationContainer>
        <DrawerNavigator1/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
