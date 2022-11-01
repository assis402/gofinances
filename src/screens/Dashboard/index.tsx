import React from 'react'
import Category from '../../classes/Category';
import Transaction from '../../classes/Transaction';
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
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles'

export function DashBoard(){
    const data: Transaction[] = [
        new Transaction(
            '1',
            'income',
            'Desenvolvimento de Site',
            'R$ 12.000,00',
            new Category('Vendas', 'dollar-sign'),
            '13/04/2020'),
        new Transaction(
            '2',
            'outcome',
            'Desenvolvimento de Site',
            'R$ 12.000,00',
            new Category('Vendas', 'dollar-sign'),
            '13/04/2020'),
        new Transaction(
            '3',
            'income',
            'Desenvolvimento de Site',
            'R$ 12.000,00',
            new Category('Vendas', 'dollar-sign'),
            '13/04/2020') 
    ];

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
            <HighlightCards>
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
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                
                <TransactionList<any>
                    data={data}
                    keyExtrator={(item: Transaction) => item.id}
                    renderItem={({ item }: { item: Transaction }) => <TransactionCard data={item}/>}
                />

                </Transactions>
        </Container>
    )
}