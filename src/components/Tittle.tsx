import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'

export type childrenProps = {
    children: string
}

export type stylesProps = {
    styles?: StyleProp<TextStyle>
}

export type TittleProps = childrenProps & stylesProps & { nome?: string }

export default function Tittle(props: TittleProps) {
    return <Text style={[componentStyles.tittle, props.styles]}>{props.children}</Text>
}

const componentStyles = StyleSheet.create({
    tittle: {
        backgroundColor: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
})
