import React from 'react'
import { Transaction }  from '../../classes/Transaction';
import { categories } from "../../utils/categories";
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

export function TransactionCard({ data }: Props ) {
    const category = categories.find(x => x.name === data.category)

    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>
                {data.type === 'outcome' ? '- ' : '' }{data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category?.icon}/>
                    <CategoryName>{category?.name}</CategoryName>
                </Category>
                <Date>{data.formattedDate}</Date>
            </Footer>
        </Container>
    )
}