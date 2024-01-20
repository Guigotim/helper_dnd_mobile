import { NavigationContainer, Theme } from '@react-navigation/native'
import Home from '../screens/home/Home'
import SpellScreen from '../screens/spell/Spell'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SpellListScreen from '../screens/spellList/SpellList'
import SpellStackScreen from './spell.routes'
import { Text, View } from 'react-native'

const Tab = createBottomTabNavigator()
const screenOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    title: 'D&D',
    headerTitleAlign: 'center',
}

const homeScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused, color, size }) => {
        return <Text style={{ fontSize: size - 5 }}>🏠</Text>
    },
}

const spellScreenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused, color, size }) => {
        return <Text style={{ fontSize: size - 5 }}>🔮</Text>
    },
    title: 'Spells',
    headerTitleAlign: 'center',
}
export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Home" component={Home} options={homeScreenOptions} />
                <Tab.Screen name="Spells" component={SpellStackScreen} options={spellScreenOptions} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
