import React from 'react';
import { ThemeProvider } from 'styled-components';

import DataProvider from './DataProvider';
import Header from './Header';
import ToDoContainer from './ToDoContainer';
import Footer from './Footer';

import { Theme } from '../styles/Theme';
import { GlobalStyle } from '../styles/Global';

function Layout() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <DataProvider>
                <ToDoContainer />
            </DataProvider>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout;