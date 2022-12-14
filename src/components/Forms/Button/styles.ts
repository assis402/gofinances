import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})`
    width: 100%;
    height: ${RFValue(56)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    line-height: 24px;
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
`