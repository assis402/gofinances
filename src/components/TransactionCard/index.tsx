import React from 'react'
import { 
    Title,
    Amount,
    Container,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date
} from './styles'

interface Props {
    type: 'income' | 'outcome';
    title: string;
    amount: string;
    category: string;
    date: string;
}

export function TransactionCard({ type, title, amount, category, date }: Props ){
    return(
        <Container>
            <Title>{title}</Title>
            <Amount type={type}>{type === 'outcome' ? '- ' : '' }{amount}</Amount>

            <Footer>
                <Category>
                    <Icon name='dollar-sign'/>
                    <CategoryName>{category}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}