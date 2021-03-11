import React, { memo, useEffect, useCallback, useState, useRef } from 'react';
import {
    shallowEqual,
    useDispatch,
    useSelector
} from 'react-redux';
import { Carousel } from 'antd';

import {
    getTopBanner
} from '@/pages/discover/c-pages/recommend/store/createActions';

import {
    TopBannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';
export default memo(function TopBanner() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const dispatch = useDispatch();
    const banner = useSelector(state => state.getIn(['recommend', 'topBanner']), shallowEqual)


    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to)
    }, [])
    //If expr1 can be converted to true, returns expr2; else, returns expr1.  (expr1 && expr2)
    const bgImage = banner[currentIndex] && banner[currentIndex].imageUrl
    const bannerRef = useRef();


    useEffect(() => {
        dispatch(getTopBanner());
    }, [dispatch])

    return (
        <TopBannerWrapper bgImage={bgImage}>
            <div className="banner">
                <BannerLeft>
                    <Carousel effect="fade" autoplay beforeChange={bannerChange} ref={bannerRef}>
                        {
                            banner.map(item => {
                                return (
                                    <div key={item.scm}>
                                        <img className="imag" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight />
                <BannerControl className="control">
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </TopBannerWrapper>
    )
})
