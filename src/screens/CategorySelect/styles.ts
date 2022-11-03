import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import theme from '../../global/styles/theme';

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(17)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-end;
    flex-direction: row;

    padding-bottom: 16px;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;
    flex-direction: row;
    align-items: center;

    background-color: ${({ isActive }) => 
        isActive ? theme.colors.secondary_light : theme.colors.background
    };
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
`

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    opacity: 0.3;
    background-color: ${({ theme }) => theme.colors.text_light};
`

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`
