// @ts-nocheck
import React, { memo } from 'react';
import {
    NavLink
} from 'react-router-dom';
import {
    Input
} from 'antd';
import {
    SearchOutlined
} from '@ant-design/icons';

import {
    AppHeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';
import {
    headerlinks
} from '@/common/local-data.js';

export default memo(function AppHeader() {

    const wrapperLink = (item) => {
        if (item.link.includes('https')) {
            return  <a className="link" key={item.title} href={item.link}>{item.title}</a>
        } else {
            return (
                <NavLink className="link" to={item.link}>
                        {item.title}
                        <i className="icon"></i>
                </NavLink>
            )
        }
    }

    return (
        <AppHeaderWrapper>
            <div className="content">
                <HeaderLeft>
                    <a href='/' className="logo">网易云音乐</a>
                    {
                        headerlinks.map(item => {
                            return (
                                <div className="select-item"  key={item.title}>
                                    {wrapperLink(item)}
                                </div>
                            )
                        })
                    }
                </HeaderLeft>
                
                <HeaderRight>
                    <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
                    <button className="creator-center">创作者中心</button>
                    <div className="login">登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </AppHeaderWrapper>
    )
})
