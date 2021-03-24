import * as actionTypes from './constants';

import { Map } from 'immutable';

const defaultState = Map({
    topBanner: [],
    hotRecommend: [],
    newAlbum: [],
    upRanking: {},
    newRanking: {},
    originRanking: {}
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.INITTOPBANNER:
            return state.set('topBanner', action.topBanner)
        case actionTypes.INITHOTRECOMMEND:
            return state.set('hotRecommend', action.hotRecommend)
        case actionTypes.INITNEWALBUM:
            return state.set('newAlbum', action.newAlbum)
        case actionTypes.INITUPRANKING:
            return state.set('upRanking', action.upRanking)
        case actionTypes.INITNEWRANKING:
            return state.set('newRanking', action.newRanking)
        case actionTypes.INITORIGINRANKING:
            return state.set('originRanking', action.originRanking)
        default:
            return state
    }
}