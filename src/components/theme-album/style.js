import styled from 'styled-components';

export const ThemeAlbumWrapper = styled.div`

    .cover {
        position: relative;
        width: 118px;
        height: 110px;
        background: url(${require('@/assets/images/sprite_02.png').default}) no-repeat -260px 100px;

        .bgimg {
            position: absolute;
            width:100px;
            height: 100px;
        }

        .msk {
            position: absolute;
            width: 118px;
            height: 100px;
            background: url(${require('@/assets/images/sprite_cover.png').default}) no-repeat 0 -570px;
        }

        .icon-play {
            position: absolute;
            visibility: hidden;
            width: 22px;
            height: 22px;
            bottom: 15px;
            left: 72px;
            background: url(${require('@/assets/images/sprite_icon.png').default}) no-repeat 0 -85px;
        }

        &:hover {
            .icon-play {
                visibility: visible;
            }
        }
    }

    .cover-bottom {
        width: 118px;

        .shared {
            font-size: 12px;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
        }

        .album-name {
            &:hover{
                text-decoration: underline;
            }
        }

        .album-artist {
            &:hover{
                text-decoration: underline;
            }
        }
    }

    
    
`