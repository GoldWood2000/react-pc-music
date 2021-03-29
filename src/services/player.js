import { createAPI } from './axios';

export const getPlaySongData = (ids) => (
    createAPI(`song/detail?ids=${ids}`,'get',{})
)

export const getSonglyrics = (id) => (
    createAPI(`lyric/?id=${id}`,'get',{})
)