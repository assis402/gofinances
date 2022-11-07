import React, { useCallback, useEffect, useState } from 'react'
import { Transaction, TransactionFactory } from '../../classes/Transaction';
import { HighlightCard } from '../../components/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'

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
    TransactionList,
    LoadContainer
} from './styles'

interface HighlightProps {
    total: Number,
    lastTransaction: string
}

interface HighlightData {
    income: HighlightProps,
    outcome: HighlightProps,
    sum: HighlightProps
}

export function DashBoard(){
    const defaultHighlightProps = {
        total: 0,
        lastTransaction: ''
    }

    const defaultHighlightData = {
        income: defaultHighlightProps,
        outcome: defaultHighlightProps,
        sum: defaultHighlightProps
    }

    const [isLoading, setIsLoading] = useState(true);
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [highlightData, setHighlightData] = useState<HighlightData>(defaultHighlightData as HighlightData);

    const theme = useTheme();

    async function loadTransactions(){
        const dataKey = '@gofinances:transactions'
        //await AsyncStorage.clear()
        const response = await AsyncStorage.getItem(dataKey);
        let transactions = response ? JSON.parse(response) as Transaction[] : [];
        transactions = transactions.sort().reverse()

        const incomeTransactions = transactions.filter(x => x.type === 'income').sort().reverse()
        const outcomeTransactions = transactions.filter(x => x.type === 'outcome').sort().reverse()

        const incomeTotal = incomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)

        const outcomeTotal = outcomeTransactions.reduce((accumulator, object) => {
            return accumulator + object.amount;
        }, 0)

        // transactions.map((item: Transaction) => {
        //     const amount = Number(item.amount).toLocaleString('pt-BR', {
        //         style: 'currency',
        //         currency: 'BRL'
        //     })
        //     const date = Intl.DateTimeFormat('pt-BR', {
        //         day: '2-digit',
        //         month: '2-digit',
        //         year: '2-digit'
        //     }).format(new Date(item.date));

        //     return
        // });

        if (transactions.length > 0){
            setTransactions(transactions);
            setHighlightData({
                income: {
                    total: incomeTotal,
                    lastTransaction: incomeTransactions[0].formattedDate
                },
                outcome: {
                    total: outcomeTotal,
                    lastTransaction: outcomeTransactions[0].formattedDate
                },
                sum: {
                    total: incomeTotal - outcomeTotal,
                    lastTransaction: transactions[0].formattedDate
                }
            })
        }

        setIsLoading(false);
    }

    useEffect(() => {
        loadTransactions()
    }, []);

    useFocusEffect(useCallback(() => {
        loadTransactions()
    }, []));

    return (
        <Container>
            {
                isLoading ? 
                <LoadContainer>
                    <ActivityIndicator 
                        color={theme.colors.primary}
                        size="large"    
                    />
                </LoadContainer> : 
                <>
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
                            amount={highlightData.income.total}
                            lastTransaction={highlightData.income.lastTransaction}
                        />
                        <HighlightCard 
                            type='outcome' 
                            amount={highlightData.outcome.total}
                            lastTransaction={highlightData.outcome.lastTransaction}
                        />
                        <HighlightCard 
                            type='balance' 
                            amount={highlightData.sum.total}
                            lastTransaction={highlightData.sum.lastTransaction}
                        />
                    </HighlightCards>

                    <Transactions>
                        { transactions.length > 0 && <Title>Listagem</Title> }
                        <TransactionList<any>
                            data={transactions}
                            keyExtrator={(item: Transaction) => item.id}
                            renderItem={({ item }: { item: Transaction }) => <TransactionCard data={item}/>}
                        />
                    </Transactions>
                </>
            }
        </Container>
    )
}