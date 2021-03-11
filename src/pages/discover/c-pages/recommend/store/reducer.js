import * as actionTypes from './constants';

import { Map } from 'immutable';

const defaultState = Map({
    topBanner: [],
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.INITTOPBANNER:
            return state.set('topBanner',action.topBanner)
        default:
            return state
    }
}