// @ts-nocheck
import { memo, Suspense } from 'react';
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
                <Suspense fallback={<div>loading...</div>}>
                    {renderRoutes(routes)}
                </Suspense>
                <AppFooter />
                <ThemePlayer />
            </BrowserRouter>
        </Provider>
    )
})

