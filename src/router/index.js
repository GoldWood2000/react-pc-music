import React from 'react';
import {
    Redirect
} from 'react-router-dom';

const Discover = React.lazy(_ => import('@/pages/discover'));
const Recommend = React.lazy(_ => import('@/pages/discover/c-pages/recommend'));
const TopList = React.lazy(_ => import('@/pages/discover/c-pages/toplist'));
const PlayList = React.lazy(_ => import('@/pages/discover/c-pages/playlist'));
const DjRadio = React.lazy(_ => import('@/pages/discover/c-pages/djradio'));
const Artist = React.lazy(_ => import('@/pages/discover/c-pages/artist'));
const Album = React.lazy(_ => import('@/pages/discover/c-pages/album'));


const Friend = React.lazy(_ => import('@/pages/friend'));
const Mine = React.lazy(_ => import('@/pages/mine'));

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