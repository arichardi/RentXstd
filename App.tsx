import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
}  from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
}  from '@expo-google-fonts/archivo'

import HomeScreen from './app/screens/HomeScreen';
import theme from './app/Styles/theme';
import CarDetailsScreen from './app/screens/CarDetailsScreen';


export default function App() {

  //fonts load
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <CarDetailsScreen />
    </ThemeProvider>
    );
}
