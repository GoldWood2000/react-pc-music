import React, { memo, useEffect, useRef } from 'react';
import {
    shallowEqual,
    useDispatch,
    useSelector
} from 'react-redux';
import { Carousel } from 'antd';

import {
    NewAlbumWrapper
} from './style';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import ThemeAlbum from '@/components/theme-album';

import {
    getNewAlbum
} from '../../store/createActions';

export default memo(function NewAlbum() {

    const dispatch = useDispatch();
    const state = useSelector(state => state.getIn(['recommend', 'newAlbum']), shallowEqual);

    const ref = useRef();

    useEffect(() => {
        dispatch(getNewAlbum(10))
    }, [dispatch])

    return (
        <NewAlbumWrapper>
            <ThemeHeaderRCM title="新碟上架" />
            <div className="disk">
                <div className="disk-left disk-icon" onClick={e => ref.current.prev()}> </div>
                <div className="album-roller">
                    <Carousel dots={false} ref={ref}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div className="list" key={item}>
                                        {
                                            state.slice(item*5, (item+1)*5).map(item => {
                                                return <ThemeAlbum info={item} key={item.id} />
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>

                </div>
                <div className="disk-right disk-icon" onClick={e => ref.current.next()}> </div>
            </div>
        </NewAlbumWrapper>
    )
})
