import React from 'react'

import {
    Amount,
    Container, 
    Content, 
    Header, 
    IncomeIcon, 
    LastTransaction, 
    Title,
} from './styles'

export function HighlightCard(){
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <IncomeIcon name="arrow-up-circle"/>
            </Header>
            <Content>
                <Amount>R$ 17.400,00</Amount>
                <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
            </Content>
        </Container>
    )
}