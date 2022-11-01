import React from 'react'
import Transaction from '../../classes/Transaction';
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
    data: Transaction
}

export function TransactionCard({ data }: Props ){
    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === 'outcome' ? '- ' : '' }{data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name='dollar-sign'/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}