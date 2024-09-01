import { fireballSpellMock, Spell, spellListMock } from '../../../mocks/fireballSpellMock'
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SpellStackParamList } from '../../routes/spell.routes'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import SpellCard from '../../components/spellCard'
import React, { useEffect, useState } from 'react'
import background from '../../assets/background.jpg'
import axios from 'axios'

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

const ListAllSpells = async () => {
    try {
        const response = await axios.get<Spell[]>('http://192.168.0.157:3001/spells');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        console.log(error)
        throw error;
    }
}

export default function SpellListScreen({ navigation }: SpellListStackScreenNavigation) {

    const [data, setData] = useState<Spell[] | null>(null)
    const [error, setError] = useState(null)

    const [spellList, setSpellList] = useState<Spell[]>(spellListMock)

    useEffect(() => {
        const fetchData = async() => {
            console.log('entrou')
            try {
                const spellList = await ListAllSpells()
                setData(spellList)
                setSpellList(spellList)
                console.log(spellList)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])

    const renderItem = ({ item }: { item: Spell }) => {
        return (
            // <Text></Text>
            <SpellCardButton item={item} onPress={() => navigation.navigate('Spell', item)} />
        )
    }

    const searchSpell = (text: string) => {
        const filteredSpellList = spellListMock.filter(spell => spell.name.toUpperCase().includes(text.toUpperCase()))
        setSpellList(filteredSpellList)
    }

    return (
        // <Text>{data && data[0].name}</Text>
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
