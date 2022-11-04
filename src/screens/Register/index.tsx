import React, { useState } from 'react'
import { Modal, View } from 'react-native'
import { Button } from '../../components/Forms/Button'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { Input } from '../../components/Forms/Input'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectModal } from '../../modals/CategorySelectModal'

import { useForm } from 'react-hook-form'

import {
    Buttons,
    Container,
    Fields,
    Form,
    Header,
    Title,
} from './styles'

interface FormData {
    name: string;
    amount: string;
}

export function Register(){
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    })
    
    const {
        control,
        handleSubmit
    } = useForm();

    function handleTransactionTypeSelect(type: 'income' | 'outcome'){
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }

    return (
        <>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm name='name' control={control} placeholder='Nome'/>
                        <InputForm name='amount' control={control} placeholder='Preço'/>

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

                        <CategorySelectButton 
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                        />
                    </Fields>

                    <Button title='Enviar' onPress={handleSubmit(handleRegister)}/>
                </Form>
            </Container>
            <CategorySelectModal
                category={category}
                setCategory={setCategory}
                closeSelectCategory={handleCloseSelectCategoryModal}
                categoryModalIsOpen={categoryModalOpen}
            />
        </>
    )
}