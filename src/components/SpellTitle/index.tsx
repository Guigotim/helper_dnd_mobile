import { StyleSheet, Text, View } from 'react-native'

export function SpellTittle({ spellName, spellCircle, spellSchool }: { spellName: string, spellCircle: number, spellSchool: string }) {
    return (
        <View>
            <Text style={styles.spellTittle}>{spellName}</Text>
            <Text style={styles.spellCircle}>
                {spellCircle}
                º círculo,
                {' '}
                {spellSchool}
            </Text>
        </View>
    )
}

export const styles = StyleSheet.create({
    spellCircle: {
        fontStyle: 'italic',
    },
    spellTittle: {
        color: '#990909',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
