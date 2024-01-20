import { NavigationContainer, NavigationProp, ParamListBase } from '@react-navigation/native'
import SpellScreen from '../screens/spell/Spell'
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from '@react-navigation/native-stack'
import SpellListScreen from '../screens/spellList/SpellList'
import { fireballSpellMock, Spell } from '../../mocks/fireballSpellMock'
import { Image, StyleSheet, Text } from 'react-native'
import background from '../assets/background.jpg'

export type SpellStackParamList = {
    SpellList: Spell[]
    Spell: Spell
}

const SpellStack = createNativeStackNavigator<SpellStackParamList>()
const screenOptions: NativeStackNavigationOptions = {
    animation: 'slide_from_right',
    headerShown: false,
    contentStyle: {
        backgroundColor: '#fff',
    },
}
export default function SpellStackScreen() {
    return (
        <SpellStack.Navigator screenOptions={screenOptions}>
            <SpellStack.Screen name="SpellList" component={SpellListScreen} />
            <SpellStack.Screen name="Spell" component={SpellScreen} />
        </SpellStack.Navigator>
    )
}
