// @ts-nocheck
import React, { memo } from 'react';
import {
    BrowserRouter
} from 'react-router-dom';
import {
    renderRoutes
} from 'react-router-config';
import routes from '@/router';
import {
    Provider
} from 'react-redux';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import ThemePlayer from '@/components/theme-player';

import store from '@/store';

export default memo(function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppHeader />
                {renderRoutes(routes)}
                <AppFooter />
                <ThemePlayer />
            </BrowserRouter>
        </Provider>
    )
})

