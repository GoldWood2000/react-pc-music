// @ts-nocheck
import * as actionTypes from './constants';

import {
    getTopBannerData,
    getHotRecommendData,
    getNewAlbumData,
    getRankingListData
} from '@/services/recommend'

const initTopBanner = (res) => ({
    type: actionTypes.INITTOPBANNER,
    topBanner: res.banners
})

const initHotRecommend = (res) => ({
    type: actionTypes.INITHOTRECOMMEND,
    hotRecommend: res.result
})

const initNewAlbum = (res) => ({
    type: actionTypes.INITNEWALBUM,
    newAlbum: res.albums
})

const initUpRanking = (res) => ({
    type: actionTypes.INITUPRANKING,
    upRanking: res.playlist
})

const initNewRanking = (res) => ({
    type: actionTypes.INITNEWRANKING,
    newRanking: res.playlist
})

const initOriginRanking = (res) => ({
    type: actionTypes.INITORIGINRANKING,
    originRanking: res.playlist
})



export const getTopBanner = () => {
    return dispatch => {
        getTopBannerData().then(res => {
            dispatch(initTopBanner(res))
        })
    }
}

export const getHotRecommend = (limitEntry) => {
    return dispatch => {
        getHotRecommendData(limitEntry).then(res => {
            dispatch(initHotRecommend(res))
        })
    }
}

export const getNewAlbum = (limitEntry) => {
    return dispatch => {
        getNewAlbumData(limitEntry).then(res => {
            dispatch(initNewAlbum(res))
        })
    }
}

export const getRankingList = (idx) => {
    return dispatch => {
        getRankingListData(idx).then(res => {
            switch (idx) {
                case 0:
                    dispatch(initNewRanking(res))
                    break;
                case 2:
                    dispatch(initOriginRanking(res))
                    break;
                case 3:
                    dispatch(initUpRanking(res))
                    break;
                default:
                    break;
            }
        })
    }
}
