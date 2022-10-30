import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Power,
    HighlghtCards,
    Transactions,
    Title
} from './styles'

export function DashBoard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/72348081?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Matheus</UserName>
                        </User>
                    </UserInfo>
                    <Power name="power"/>
                </UserWrapper>
            </Header>
            <HighlghtCards>
                <HighlightCard 
                    type='income' 
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighlightCard 
                    type='outcome' 
                    amount='R$ 1.259,00' 
                    lastTransaction='Última saídas dia 03 de abril'
                />
                <HighlightCard 
                    type='balance' 
                    amount='R$ 16.141,00' 
                    lastTransaction='01 à 16 de abril'
                />
            </HighlghtCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionCard
                    type='income'
                    title='Desenvolvimento de Site'
                    amount='R$ 12.000,00'
                    category='Vendas'
                    date='13/04/2020'
                />
                <TransactionCard
                    type='outcome'
                    title='Desenvolvimento de Site'
                    amount='R$ 12.000,00'
                    category='Vendas'
                    date='13/04/2020'
                />
                <TransactionCard
                    type='income'
                    title='Desenvolvimento de Site'
                    amount='R$ 12.000,00'
                    category='Vendas'
                    date='13/04/2020'
                />
            </Transactions>
        </Container>
    )
}