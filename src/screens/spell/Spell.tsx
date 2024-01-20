import { Image, StyleSheet, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SpellStackParamList } from '../../routes/spell.routes'
import { Spell } from '../../../mocks/fireballSpellMock'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import SpellDetails from '../../components/spellDetails'
import background from '../../assets/background.jpg'

type SpellStackScreenNavigation = NativeStackScreenProps<SpellStackParamList, 'Spell'>
export default function SpellScreen({ route }: SpellStackScreenNavigation) {
    const { params: fireballSpell } = route
    console.log(fireballSpell.name)
    return (
        <View style={{ padding: 15, paddingTop: 25 }}>
            <Image source={background} style={styles.spellBackground} />
            <SpellDetails spell={fireballSpell} />
        </View>
    )
}

const styles = StyleSheet.create({
    backButtom: {
        marginVertical: 10,
    },
    spellBackground: {
        backgroundColor: 'white',
        height: 800,
        opacity: 0.4,
        position: 'absolute',
        width: '200%',
    },
})
