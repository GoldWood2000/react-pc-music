// @ts-nocheck
import React from 'react';
import {
    Redirect
} from 'react-router-dom';

import Discover from '@/pages/discover';
import Recommend from '@/pages/discover/c-pages/recommend';
import TopList from '@/pages/discover/c-pages/toplist';
import PlayList from '@/pages/discover/c-pages/playlist';
import DjRadio from '@/pages/discover/c-pages/djradio';
import Artist from '@/pages/discover/c-pages/artist';
import Album from '@/pages/discover/c-pages/album';


import Friend from '@/pages/friend';
import Mine from '@/pages/mine';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover" />
        )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path:'/discover',
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path:'/discover/recommend',
                component: Recommend,
            },
            {
                path:'/discover/toplist',
                component: TopList,
            },
            {
                path:'/discover/playlist',
                component: PlayList,
            },
            {
                path:'/discover/djradio',
                component: DjRadio,
            },
            {
                path:'/discover/artist',
                component: Artist,
            },
            {
                path:'/discover/album',
                component: Album,
            }
        ]
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/friend',
        component: Friend
    }
]

export default routes;