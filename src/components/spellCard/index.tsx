import { StyleSheet, Text, View } from 'react-native'
import { SpellTittle } from '../SpellTitle'
import { Spell } from '../../../mocks/fireballSpellMock'

export default function SpellCard({ spell }: { spell: Spell }) {
    const limitResume = (resume: string) => {
        if (resume.length > 80) {
            return resume.substring(0, 80) + '...'
        }
        return resume
    }

    return (
        <View style={styles.spellCard}>
            <SpellTittle spellName={spell.name} spellCircle={spell.circle} spellSchool={spell.school} />
            <Text style={styles.spellResume}>{limitResume(spell.resume)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    spellCard: {
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        maxHeight: 120,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingTop: 15,
    },
    spellResume: {
        fontStyle: 'italic',
        paddingTop: 10,
    },
})
