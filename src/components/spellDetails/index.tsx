import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { Spell } from '../../../mocks/fireballSpellMock'
import TextTabulation from '../textTabulation'
import { SpellTittle } from '../SpellTitle'

interface SpellsDetailsProps {
    spell: Spell
}
export default function SpellDetails({ spell }: SpellsDetailsProps) {
    return (
        <View>
            <SpellTittle spellName={spell.name} spellCircle={spell.circle} spellSchool={spell.school} />
            <SpellPropertiesGroup spell={spell} />
            <SpellDescription spell={spell} />
        </View>
    )
}

function SpellPropertiesGroup({ spell }: { spell: Spell }) {
    return (
        <SpellViewGroup>
            <SpellProperty label="Tempo de Conjuração" value={spell.castingTime} />
            <SpellProperty label="Alcance" value={spell.range} />
            <SpellProperty label="Componentes" value={spell.components} />
            <SpellProperty label="Duração" value={spell.duration} />
        </SpellViewGroup>
    )
}

function SpellProperty({ label, value, style }: { label: string, value: string, style?: StyleProp<TextStyle> }) {
    return (
        <Text>
            <Text style={[styles.spellLabelHighlight, style]}>
                {label}
                :
                {' '}
            </Text>
            <Text>{value}</Text>
        </Text>
    )
}

function SpellDescription({ spell }: { spell: Spell }) {
    return (
        <SpellViewGroup>
            {spell.description.map((description, index) => {
            return <TextTabulation key={index} tabulationLevel={2}>{description}</TextTabulation>
        })}
            <TextTabulation tabulationLevel={2}>
                <SpellProperty style={styles.spellHigherCircleLabel} label="Em Círculos Superiores" value={spell.castWithUpperCircleDetail} />
            </TextTabulation>

        </SpellViewGroup>
    )
}

function SpellViewGroup({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.spellMarginViewGroup}>
            {children}
        </View>
    )
}

export const styles = StyleSheet.create({
    spellCircle: {
        fontStyle: 'italic',
    },
    spellHigherCircleLabel: {
        fontStyle: 'italic',
    },
    spellLabelHighlight: {
        fontWeight: 'bold',
    },
    spellMarginViewGroup: {
        marginTop: 8,
    },
    spellTittle: {
        color: '#990909',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
