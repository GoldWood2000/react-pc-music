import {
    createAPI
} from './axios';

export function getTopBannerData() {
    return createAPI('banner','get',{})
}

export function getHotRecommendData(limitEntry) {
    return createAPI(`personalized?limit=${limitEntry}`,'get',{})
}

export function getNewAlbumData(limitEntry) {
    return createAPI(`top/album?limit=${limitEntry}`,'get',{})
}

export function getRankingListData(idx) {
    return createAPI(`top/list?idx=${idx}`,'get',{})
}

