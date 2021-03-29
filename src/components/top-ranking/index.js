import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import {
    TopRankingWrapper
} from './style';

import {
    getSizeImage
} from '@/utils/format-utils';

import {
    changePlayList
} from '@/pages/player/store/createActions';

export default memo(function TopRanking(props) {

    const { info } = props;
    const { tracks = [] } = info;
    const dispatch = useDispatch();

    const addMusicToPlayList = (id) => {
        dispatch(changePlayList(id));
    }

    return (
        <TopRankingWrapper>
            <div className="header">
                <div className="bgimg">
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
                    <a className="msk" href="/#"> </a>
                </div>
                <div className="tit">
                    <h4>{info.name}</h4>
                    <div className="btn">
                        <a className="icon-play shard" href="/#"> </a>
                        <a className="subscribe shard" href="/#"> </a>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <span className="name">{item.name}</span>
                                    <div className="operate">
                                        <button className="btn play" onClick={e => { addMusicToPlayList(item.id) }}></button>
                                        <button className="btn addto"></button>
                                        <button className="btn favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="footer">
                <a href="/todo">查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})
