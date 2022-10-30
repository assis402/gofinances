import React from 'react'

import {
    Amount,
    Container, 
    Content, 
    Header, 
    Icon, 
    LastTransaction, 
    Title,
} from './styles'

interface Props {
    type: 'income' | 'outcome' | 'balance';
    amount: string;
    lastTransaction: string;
}

const title = {
    income: 'Entradas',
    outcome: 'Saídas',
    balance: 'Saldo'
}

const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',
    balance: 'dollar-sign'
}

export function HighlightCard({ type, amount, lastTransaction }: Props){    
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title[type]}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>
            <Content>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Content>
        </Container>
    )
}