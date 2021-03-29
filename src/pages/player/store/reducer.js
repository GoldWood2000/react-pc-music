import * as actionType from './constants'

import { Map } from 'immutable';

const defaultState = Map({
    currentSong: {},
    playList: [],
    playOptions: 0,
    currentSongIndex: -1,
    lyrics: []
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.INITPLAYSONG:
            return state.set('currentSong', action.currentSong)
        case actionType.CHANGEPLAYLIST:
            return state.set('playList', action.playList)
        case actionType.CHANGEPLAYOPTIONS:
            return state.set('playOptions', action.playOptions)
        case actionType.CHANGECURRENTSONGINDEX:
            return state.set('currentSongIndex', action.currentSongIndex)
        case actionType.CHANGELYRICS:
            return state.set('lyrics', action.lyrics)
        default:
            return state;
    }
}