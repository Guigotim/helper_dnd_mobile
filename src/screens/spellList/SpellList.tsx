import { fireballSpellMock, Spell, spellListMock } from '../../../mocks/fireballSpellMock'
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SpellStackParamList } from '../../routes/spell.routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import SpellCard from '../../components/spellCard'
import React, { useState } from 'react'
import background from '../../assets/background.jpg'

type SpellListStackScreenNavigation = NativeStackScreenProps<SpellStackParamList, 'SpellList'>

type itemProps = {
    item: Spell
    onPress: () => void
}

const SpellCardButton = ({ item, onPress }: itemProps) => (
    <Pressable
        onPress={onPress}
    >
        <SpellCard spell={item} />
    </Pressable>
)

export default function SpellListScreen({ navigation }: SpellListStackScreenNavigation) {
    const [spellList, setSpellList] = useState<Spell[]>(spellListMock)

    const renderItem = ({ item }: { item: Spell }) => {
        return (
            <SpellCardButton item={item} onPress={() => navigation.navigate('Spell', item)} />
        )
    }

    const searchSpell = (text: string) => {
        const filteredSpellList = spellListMock.filter(spell => spell.name.toUpperCase().includes(text.toUpperCase()))
        setSpellList(filteredSpellList)
    }

    return (
        <FlatList
            contentContainerStyle={styles.spellList}
            ListHeaderComponent={<TextInput style={styles.searchInput} placeholder="Pesquisar" onChangeText={searchSpell} />}
            data={spellList}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    spellBackground: {
        backgroundColor: 'white',
        height: 800,
        opacity: 0.4,
        position: 'absolute',
        width: '200%',
        zIndex: -1,
      },
    spellList: {
        display: 'flex',
        gap: 10,
        padding: 15,
        paddingTop: 15,
    },
})
