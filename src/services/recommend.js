import {
    createAPI
} from './axios';

export function getTopBannerData() {
    return createAPI('banner','',{})
}

