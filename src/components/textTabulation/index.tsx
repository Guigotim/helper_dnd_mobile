import React from 'react'
import { Text, View } from 'react-native'

interface TextTabulationProps {
    tabulationLevel?: number
    children: React.ReactNode
}
export default function TextTabulation({ tabulationLevel = 1, children }: TextTabulationProps) {
    const tabulation = '\t'.repeat(tabulationLevel)

    return (
        <Text>
            {tabulation}
            {children}
        </Text>
    )
}
