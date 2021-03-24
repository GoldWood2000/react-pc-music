import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import {
    ThemeSongWrapper
} from './style';

import {
    getSizeImage,
    formatNumber
} from '@/utils/format-utils';

export default memo(function ThemeSong(props) {

    const { info } = props

    return (
        <ThemeSongWrapper>
            <div className="cover">
                <img className="bgimg" src={getSizeImage(info.picUrl, 140)} alt="" />
                <NavLink className="msk" to="" title={info.name}></NavLink>
                <div className="buttom">
                    <div className="buttomLeft">
                        <i className="icon-headset"></i>
                        <span className="txt">{formatNumber(info.playCount)}</span>
                    </div>
                    <i className="icon-play"></i>
                </div>
            </div>
            <div className="cover-bottom" title={info.name}>
                {info.name}
            </div>
            <div className="cover-source">
                by {info.copywriter || info.creator.nickname}
            </div>
        </ThemeSongWrapper>
    )
})
