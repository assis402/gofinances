import uuid from 'react-native-uuid'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export type TransactionType = 'income' | 'outcome'

export class Transaction {
    id!: string
    type!: 'income' | 'outcome'
    title!: string
    amount!: number
    formattedAmount!: string
    category!: string
    date!: string
    formattedDate!: string
}

export class TransactionFactory {
    static new(type: string,
               title: string,
               amount: string,
               category: string) : Transaction {
        var newTransaction = new Transaction()

        const creationDate = new Date()

        newTransaction.id = String(uuid.v4())
        newTransaction.date = String(creationDate)

        newTransaction.formattedDate = creationDate.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'})

        newTransaction.type = type as TransactionType
        newTransaction.title = title
        newTransaction.amount = Number(amount) 
        newTransaction.formattedAmount = new Intl.NumberFormat("pt-BR", {
            style:'currency',
            currency:'BRL'
        })
        .format(Number(amount))
        .replace("R$", "R$\u0020")
        
        newTransaction.category = category

        return newTransaction;
    }

    // static fromGet(id: string,
    //                type: string,
    //                title: string,
    //                amount: string,
    //                category: Category,
    //                date: string) : Transaction {
    //     var transaction = new Transaction()

    //     transaction.id = id
    //     transaction.date = date
    //     transaction.type = type as TransactionType
    //     transaction.title = title
    //     transaction.amount = amount
    //     transaction.category = category

    //     return transaction;
    // }
}