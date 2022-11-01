import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
    width: 100%;
    padding: 18px;
    font-size: ${RFValue(14)}px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.shape};
    margin-bottom: 8px;
`