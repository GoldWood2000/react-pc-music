// @ts-nocheck
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import {
    renderRoutes
} from 'react-router-config';

import {
    DiscoverWrapper,
    TopMenu
} from './style';
import {
    DisCoverLinks
} from '@/common/local-data';
import {
    createAPI
} from '@/services/axios';



export default memo(function Discover(props) {
    const route = props.route.routes

    createAPI('banner','',{}).then(res => {
        console.log(res);
    })
    

    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu>
                    {
                        DisCoverLinks.map(item => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route)}
        </DiscoverWrapper>
    )
})
