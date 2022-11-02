import React, { useState } from 'react'

import { Button } from '../../components/Forms/Button'
import { Input } from '../../components/Forms/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'

import {
    Buttons,
    Container,
    Fields,
    Form,
    Header,
    Title,
} from './styles'

export function Register(){
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypeSelect(type: 'income' | 'outcome'){
        setTransactionType(type)
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Preço'/>

                    <Buttons>
                        <TransactionTypeButton 
                            type='income'
                            onPress={() => handleTransactionTypeSelect('income')}
                            isActive={transactionType === 'income'}
                        />
                        <TransactionTypeButton 
                            type='outcome'
                            onPress={() => handleTransactionTypeSelect('outcome')}
                            isActive={transactionType === 'outcome'}
                        />
                    </Buttons>
                </Fields>

                <Button title='Enviar'/>
            </Form>
        </Container>
    )
}