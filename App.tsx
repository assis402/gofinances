import React from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme'
import { DashBoard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    NavigationBar.setBackgroundColorAsync(theme.colors.background);
    NavigationBar.setBorderColorAsync(theme.colors.background);
    NavigationBar.setButtonStyleAsync('dark');

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    if(!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <ThemeProvider theme={theme}>
            <Register/>
        </ThemeProvider>
    )
}