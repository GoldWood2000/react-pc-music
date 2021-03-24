import { createAPI } from './axios';

export const getPlaySongData = (ids) => (
    createAPI(`song/detail?ids=${ids}`,'get',{})
)