import * as actionType from './constants'

import { Map } from 'immutable';

const defaultState = Map({
    currentSong: {},
    playList: []
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.INITPLAYSONG:
            return state.set('currentSong', action.currentSong)
        case actionType.CHANGEPLAYLIST:
            return state.set('playList', action.playList)
        default:
            return state;
    }
}