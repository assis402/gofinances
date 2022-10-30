import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
    type: 'income' | 'outcome';
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    border-radius: 5px;
    padding: 19px 24px;
    margin-top: 16px;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.title};
`

export const Amount = styled.Text<TypeProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => 
        type === 'income' ? theme.colors.success : theme.colors.attention};
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
    margin-bottom: 3px;
`

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(17)}px;
    color: ${({ theme }) => theme.colors.text_light};
`

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    line-height: 25px;
    margin-left: 17px;
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_light};
`

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    line-height: 21px;
    color: ${({ theme }) => theme.colors.text_light};
`