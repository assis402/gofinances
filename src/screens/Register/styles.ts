import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(17)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-end;
    flex-direction: row;

    padding-bottom: 16px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`

export const Form = styled.View`
    flex: 1;
    padding: ${RFValue(24)}px;
    justify-content: space-between;
`;

export const Fields = styled.View`

`

export const Buttons = styled.View`
    margin-top: 8px;
    flex-direction: row;
    justify-content: space-between;
`