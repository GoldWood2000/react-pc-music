import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
    ThemePlayerWrapper,
    Control,
    PlayInfo,
    Operator
} from './style';
import { Slider } from 'antd';

import {
    getSizeImage
} from '@/utils/format-utils';
import {
    getPlaySong
} from '@/pages/player/store/createActions';

export default memo(function ThemePlayer() {

    //state
    const [isPlay, setIsPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isChange, setIsChange] = useState(false);

    const dispatch = useDispatch();
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong'])
    }),shallowEqual);
    const imgUrl = (currentSong.al === undefined || getSizeImage(currentSong.al.picUrl, 34)).toString();
    const songName = currentSong.name === undefined || currentSong.name
    const singer = currentSong.ar === undefined || currentSong.ar[0].name
    const totalTime = currentSong.dt === undefined || moment(currentSong.dt).format('mm:ss')
    const showProgressTime = moment(currentTime).format('mm:ss')

    const audioRef = useRef();


    //handle event
    const handlePlaySong = useCallback(() => {
        setIsPlay(!isPlay);
        !isPlay ? audioRef.current.play() : audioRef.current.pause()
    }, [isPlay])

    const timeUpdate = (e) => {
        if (!isChange) {
            setCurrentTime(e.target.currentTime * 1000);
            setProgress((e.target.currentTime * 1000) / duration * 100)
        }
    }

    const sliderChange = useCallback((value) => {
        setIsChange(true);
        setProgress(value);
        setCurrentTime(value / 100 * duration);
    }, [duration])

    const sliderAfterChange = useCallback((value) => {
        setIsChange(false);
        audioRef.current.currentTime = value / 100 * duration / 1000
    }, [duration])

    //测试useEffect依赖，值为空对象会一直加载组件
    //console.log(1111);
    //hook
    useEffect(() => {
        dispatch(getPlaySong(167876))
        currentSong.dt === undefined || setDuration(currentSong.dt)
    }, [dispatch, currentSong.dt])


    return (
        <ThemePlayerWrapper>
            <div className="content">
                <Control isPlay={isPlay}>
                    <button className="btn prev"></button>
                    <button className="btn paly" onClick={e => { handlePlaySong() }}></button>
                    <button className="btn next"></button>
                </Control>
                {/* progress={progress} */}
                <PlayInfo>
                    <div className="bgimg">
                        <img className="img" src={imgUrl} alt="" />
                        <a className="msk" href="/#"> </a>
                    </div>
                    <div className="info">
                        <div className="song">
                            <a href="/#" className="song-name">{songName}</a>
                            <a href="/#" className="singer">{singer}</a>
                            <a href="/#" className="src"> </a>
                        </div>
                        <div className="progress">
                            <Slider tooltipVisible={false} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
                            <div className="time">
                                <span className="now-time">{showProgressTime}</span>
                                <span className="divider">/</span>
                                <span className="total-time">{totalTime}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator>
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop"></button>
                        <button className="sprite_playbar btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} src="https://music.163.com/song/media/outer/url?id=167876.mp3"></audio>
        </ThemePlayerWrapper>
    )
})
