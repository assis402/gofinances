import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export function formatAmount(value: Number){
    return new Intl.NumberFormat("pt-BR", {
            style:'currency',
            currency:'BRL'
        })
        .format(value)
        .replace("-", "-\u0020")
        .replace("R$", "R$\u0020")
}

export function formatDate(date: string){
    return new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'})
}

export function formatDateToHighlight(date: string){
    return new Date(date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long'
    })
}

// export function formatDateToSummary(date: string){
//     return new Date(date).toLocaleDateString('pt-BR', {
//         day: '2-digit',
//         month: '2-digit',
//         year: '2-digit'})
// }