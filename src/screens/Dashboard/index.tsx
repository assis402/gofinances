import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container } from './styles'

export function DashBoard(){
    return (
        <Container>
            <Text>Dashboard</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})