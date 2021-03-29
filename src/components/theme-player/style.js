import styled from 'styled-components';

export const ThemePlayerWrapper = styled.div`
    position: fixed;
    bottom: 0;
    height: 53px;
    width: 100%;
    background: url(${require('@/assets/images/playbar_sprite.png').default}) repeat 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        width: 980px;
        height: 47px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
    }

`

export const Control = styled.div`
    width: 137px;
    padding: 6px 0 0 0;
    display: flex;
    align-items: center;

    .btn {
        width: 28px;
        height: 28px;
        margin: 5px 8px 0 0;
        cursor: pointer;
        outline: none;
        border: none;
        background: url(${require('@/assets/images/playbar_sprite.png').default}) no-repeat;
    }

    .prev {
        background-position: 0 -130px;
    }

    .paly {
        width: 36px;
        height: 36px;
        background-position: ${ (props) => props.isPlay ? '0 -165px' : '0 -204px' };
    }

    .next {
        background-position: -80px -130px;
    }
`

export const PlayInfo = styled.div`
    width: 642px;
    display: flex;
    align-items: center;
    

    .bgimg {
        width: 34px;
        height: 34px;
        position: relative;
        margin: 6px 10px 0 0;

        .img {
            position: absolute;
        }

        .msk {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 34px;
            height: 34px;
            background: url(${require('@/assets/images/playbar_sprite.png').default}) repeat 0 -80px;
        }
    }

    .info {
        .song {
            display: flex;
            margin-left: 5px;

            .song-name {
                font-size: 12px;
                color: #e8e8e8;
                &:hover {
                    text-decoration:underline;
                }
            }
            .singer {
                margin-left: 15px;
                font-size: 12px;
                color: #9b9b9b;
                &:hover {
                    text-decoration:underline;
                }
            }
            .src {
                display: block;
                width: 14px;
                height: 15px;
                background: url(${require('@/assets/images/playbar_sprite.png').default}) repeat -110px -103px;
                margin: 2px 0 0 13px;
            }
        }

        .progress {
            display: flex;
            align-items: center;
            height: 9px;
            margin-top: 4px;

            .ant-slider {
                width: 493px;

                .ant-slider-rail {
                    width: 100%;
                    height: 9px;
                    background: url(${require("@/assets/images/progress_bar.png").default}) right 0;
                }
                .ant-slider-track {
                    /* width: ${ props => props.progress + '%'} !important;  */
                    height: 9px;
                    background: url(${require("@/assets/images/progress_bar.png").default}) left -66px;
                }
                .ant-slider-handle {
                    /* left: ${ props => props.progress + '%'} !important;  */
                    width: 22px;
                    height: 24px;
                    border: none;
                    margin-top: -7px;
                    background: url(${require("@/assets/images/sprite_icon.png").default}) 0 -250px;
                }
            }

            .time {
                margin-left: 6px;
                font-size: 12px;
                .now-time {
                    color: #a1a1a1;
                }
                .divider {
                    
                    margin: 0 3px;
                    color: #a1a1a1;
                }
                .total-time {
                    color: #797979;
                }
            }
        }

    }
`

export const Operator = styled.div`
    display: flex;
    align-items: end;
    top: 5px;
    margin: 10px 0 0 20px;
    
    .sprite_playbar {
        background: url(${require("@/assets/images/playbar_sprite.png").default}) no-repeat 0 9999px;
    }

    .btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
        outline: none;
        border: none;
    }
    .favor {
        background-position: -88px -163px;
    }
    .share {
        background-position: -114px -163px;
    }
    .left {
        margin-right: 5px;
    }
    .right {
        display: flex;
        align-items: center;
        width: 126px;
        padding-left: 13px;
        background-position: -147px -248px;
        
        .volume {
            background-position: -2px -248px;
        }
        .loop {
            background-position: ${(props) => {
                switch(props.playOptions) {
                    case 1:
                        return '-66px -248px'
                    case 2: 
                        return '-66px -344px'
                    default:
                        return '-3px -344px'
                }
            }}
        }
        .playlist {
            padding-left: 18px;
            text-align: center;
            color: #9b9b9b;
            font-size: 6px;
            width: 59px;
            background-position: -42px -68px;
        }
    }
`