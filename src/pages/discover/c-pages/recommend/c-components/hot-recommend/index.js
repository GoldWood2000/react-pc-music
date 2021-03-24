import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
    RecommendWrapper
} from './style';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeSong from '@/components/theme-song';

import {
    getHotRecommend
} from '../../store/createActions';


export default memo(function HotRecommend() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.getIn(['recommend', 'hotRecommend']),shallowEqual);

    useEffect(() => {
        dispatch(getHotRecommend(8))
    }, [dispatch])

    return (
        <RecommendWrapper>
            <ThemeHeaderRCM title="热门推荐" tab={["华语", "流行", "摇滚", "民谣", "电子"]} />
            <div className="recommend-list">
                {
                    state.map(item => {
                        return <ThemeSong info={item} key={item.id}/>
                    })
                }
            </div>

        </RecommendWrapper>
    )
})
