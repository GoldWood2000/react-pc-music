import * as actionType from './constants';

import {
    getPlaySongData,
    getSonglyrics
} from '@/services/player';

import {
    formatSongLyrics
    // parseLyric
} from '@/utils/format-utils';

const initPlaySong = (currentSong) => ({
    type: actionType.INITPLAYSONG,
    currentSong
})
const initPlayList = (playList) => ({
    type: actionType.CHANGEPLAYLIST,
    playList
})
const initPlayOptions = (playOptions) => ({
    type: actionType.CHANGEPLAYOPTIONS,
    playOptions
})
const initCurrentSongIndex = (currentSongIndex) => ({
    type: actionType.CHANGECURRENTSONGINDEX,
    currentSongIndex
})
const initLyrics = (lyrics) => ({
    type: actionType.CHANGELYRICS,
    lyrics
})




export const getPlaySong = (ids) => {
    return dispatch => {
        getPlaySongData(ids).then(res => {
            dispatch(initPlaySong(res.songs[0]))
        })
    }
}

export const changePlayList = (id) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList'])
        const songIndex = playList.findIndex(item => item.id === id)
        let SongDetailList = []
        SongDetailList = [...playList]
        if (songIndex === -1) {
            getPlaySongData(id).then(res => {
                SongDetailList.push(res.songs[0])
                dispatch(initPlayList(SongDetailList))
                dispatch(initPlaySong(res.songs[0]))
                dispatch(initCurrentSongIndex(SongDetailList.length - 1))
            })
        } else {
            dispatch(initPlaySong(SongDetailList[songIndex]))
            dispatch(initCurrentSongIndex(songIndex))
        }

        getSonglyrics(id).then(res => {
            // parseLyric(res.lrc.lyric);
            const lyrics = formatSongLyrics(res.lrc.lyric);
            dispatch(initLyrics(lyrics))
        })
    }
}

export const changePlayOptions = () => {
    return (dispatch, getState) => {
        let playOptions = getState().getIn(['player', 'playOptions'])
        playOptions === 2 ? playOptions = 0 : playOptions++
        dispatch(initPlayOptions(playOptions));
    }
}

export const changePlaySong = (tag) => {
    return (dispatch, getState) => {
        const playOptions = getState().getIn(['player', 'playOptions'])
        const playList = getState().getIn(['player', 'playList'])
        let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])

        //处理播放顺序
        switch (playOptions) {
            case 1:
                let random = Math.floor(Math.random() * playList.length)
                while (random === currentSongIndex) {
                    random = Math.floor(Math.random() * playList.length)
                }
                currentSongIndex = random
                break;
            default:
                currentSongIndex = currentSongIndex + tag
                if (currentSongIndex === playList.length) currentSongIndex = 0
                if (currentSongIndex === -1) currentSongIndex = playList.length - 1
        }

        dispatch(initPlaySong(playList[currentSongIndex]))
        dispatch(initCurrentSongIndex(currentSongIndex))
        getSonglyrics(playList[currentSongIndex].id).then(res => {
            const lyrics = formatSongLyrics(res.lrc.lyric);
            dispatch(initLyrics(lyrics))
        })
    }
}