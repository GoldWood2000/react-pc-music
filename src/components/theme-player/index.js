import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import {
    ThemePlayerWrapper,
    Control,
    PlayInfo,
    Operator
} from './style';
import { Slider, message } from 'antd';

import {
    getSizeImage,
    getPlayUrl
} from '@/utils/format-utils';
import {
    changePlayOptions,
    changePlaySong
} from '@/pages/player/store/createActions';

export default memo(function ThemePlayer() {

    //state
    const [isPlay, setIsPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isChange, setIsChange] = useState(false);

    const dispatch = useDispatch();
    const { currentSong, playList, playOptions, lyrics } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong']),
        playList: state.getIn(['player', 'playList']),
        playOptions: state.getIn(['player', 'playOptions']),
        lyrics: state.getIn(['player', 'lyrics'])
    }), shallowEqual);
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

        let i = 0;
        for (; i < lyrics.length; i++) {
            const lrcTime = lyrics[i].time;
            if (e.target.currentTime * 1000 < lrcTime) {
                break
            }
        }
        message.open({
            content: lyrics[i - 1].content,
            key: "lyric",
            duration: 0,
            className: 'lyric-message',
        })
    }

    const timeEnded = () => {
        if (playOptions === 2 || playList.length === 1) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            dispatch(changePlaySong(1));
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
        audioRef.current.src = getPlayUrl(currentSong.id);
        audioRef.current.play().then(res => {
            setIsPlay(true)
        }).catch(err => {
            setIsPlay(false)
        })
        currentSong.dt === undefined || setDuration(currentSong.dt)
    }, [dispatch, currentSong.dt, currentSong.id])


    return (
        <ThemePlayerWrapper>
            <div className="content">
                <Control isPlay={isPlay}>
                    <button className="btn prev" onClick={e => { dispatch(changePlaySong(-1)) }}></button>
                    <button className="btn paly" onClick={e => { handlePlaySong() }}></button>
                    <button className="btn next" onClick={e => { dispatch(changePlaySong(1)) }}></button>
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
                            <a href="/#" className="src" style={{ visibility: currentSong.id === undefined ? 'hidden' : 'visible' }}> </a>
                        </div>
                        <div className="progress">
                            <Slider tooltipVisible={false} value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
                            <div className="time">
                                <span className="now-time">{showProgressTime}</span>
                                <span className="divider">/</span>
                                <span className="total-time">{currentSong.id === undefined ? '00:00' : totalTime}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator playOptions={playOptions}>
                    <div className="left">
                        <button className="sprite_playbar btn favor"></button>
                        <button className="sprite_playbar btn share"></button>
                    </div>
                    <div className="right sprite_playbar">
                        <button className="sprite_playbar btn volume"></button>
                        <button className="sprite_playbar btn loop" onClick={e => { dispatch(changePlayOptions()) }}></button>
                        <button className="sprite_playbar btn playlist">{playList.length}</button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded} />
        </ThemePlayerWrapper>
    )
})
