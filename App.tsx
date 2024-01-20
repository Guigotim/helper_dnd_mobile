import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Home from './src/screens/home/Home'
import SpellScreen from './src/screens/spell/Spell'

import background from './src/assets/background.jpg'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AppRoutes from './src/routes/app.routes'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    // <SafeAreaView style={{flex: 1}}>
      <SafeAreaProvider style={styles.container}>
          <StatusBar />
          <AppRoutes />
      </SafeAreaProvider>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})
