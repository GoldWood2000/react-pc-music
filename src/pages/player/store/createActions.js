import * as actionType from './constants'

import {
    getPlaySongData
} from '@/services/player';

const initPlaySong = (currentSong) => ({
    type: actionType.INITPLAYSONG,
    currentSong
})


export const getPlaySong = (ids) => {
    return dispatch => {
        getPlaySongData(ids).then(res => {
            dispatch(initPlaySong(res.songs[0]))
        })
    }
}