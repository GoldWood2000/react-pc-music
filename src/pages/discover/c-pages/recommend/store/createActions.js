// @ts-nocheck
import * as actionTypes from './constants';

import {
    getTopBannerData
} from '@/services/recommend'

const initTopBanner = (res) => ({
    type: actionTypes.INITTOPBANNER,
    topBanner: res.banners
})

export const getTopBanner = () => {
    return dispatch => {
        getTopBannerData().then(res => {
            dispatch(initTopBanner(res))
        })
    }
}