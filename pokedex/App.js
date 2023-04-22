import 'react-native-gesture-handler';2
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
     <Navigation />
    </NavigationContainer>
  );
}

