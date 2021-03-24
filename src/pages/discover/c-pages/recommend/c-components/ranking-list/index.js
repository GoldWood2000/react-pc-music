import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
    RankingListWrapper
} from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';

import {
    getRankingList
} from '../../store/createActions';

export default memo(function RankingList() {

    const dispatch = useDispatch();
    const state = useSelector(state => ({
        upRanking: state.getIn(['recommend','upRanking']),
        newRanking: state.getIn(['recommend','newRanking']),
        originRanking: state.getIn(['recommend','originRanking'])
    }),shallowEqual);


    useEffect(() => {
        dispatch(getRankingList(0)) //NewRanking
        dispatch(getRankingList(2)) //OriginRanking
        dispatch(getRankingList(3)) //UpRanking
    }, [dispatch])

    return (
        <RankingListWrapper>
            <ThemeHeaderRCM title="榜单" />
            <div className="tops">
                <TopRanking info={state.upRanking} />
                <TopRanking info={state.newRanking} />
                <TopRanking info={state.originRanking} />
            </div>
        </RankingListWrapper>
    )
})
