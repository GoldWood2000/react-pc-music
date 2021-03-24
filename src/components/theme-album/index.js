import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import {
    ThemeAlbumWrapper
} from './style';

import {
    getSizeImage
} from '@/utils/format-utils';

export default memo(function ThemeAlbum(props) {

    const { info } = props;
    // const [changeIconState, setchangeIconState] = useState('hidden');

    // const controlIconState = useCallback((iconState) => {
    //     if (iconState) {
    //         setchangeIconState('visible');
    //     } else {
    //         setchangeIconState('hidden');
    //     }
    // }, [])

    return (
        <ThemeAlbumWrapper>
            <div className="cover">
                <img className="bgimg" src={getSizeImage(info.picUrl, 100)} alt="" />
                <NavLink className="msk" title={info.name} to=""></NavLink>
                <NavLink className="icon-play" title="播放" to=""></NavLink>
            </div>
            <div className="cover-bottom">
                <div className="album-name shared" title={info.name} to="">{info.name}</div>
                <div className="album-artist shared" title={info.artist.name} to="">{info.artist.name}</div>
            </div>
        </ThemeAlbumWrapper>
    )
})
