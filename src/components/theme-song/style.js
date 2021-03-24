import styled from 'styled-components';

export const ThemeSongWrapper = styled.div`
    width: 140px;

    .cover {
        width: 140px;
        height: 140px;
        position: relative;

        .bgimg {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
        }

        .msk {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            background: url(${require('@/assets/images/sprite_cover.png').default}) no-repeat 0 0;
        }

        .buttom {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 27px;
            background: url(${require('@/assets/images/sprite_cover.png').default}) no-repeat 0 -537px;
            color: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;


            .buttomLeft {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon-headset {
                    width: 14px;
                    height: 11px;
                    background: url(${require('@/assets/images/sprite_icon.png').default}) no-repeat 0 -24px;
                    margin: 0 3px 0 10px;
                }

                .txt {
                    font-size: 12px;
                    color: #ccc;
                }
            }
            
            

            .icon-play {
                width: 16px;
                height: 17px;
                background: url(${require('@/assets/images/sprite_icon.png').default}) no-repeat 0 0;
                margin-right: 10px;
            }
        }


    }

    .cover-bottom {
        font-size: 14px;
        color: #000;
        margin-top: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .cover-source {
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        color: #666;
        margin-bottom: 30px;
    }
`