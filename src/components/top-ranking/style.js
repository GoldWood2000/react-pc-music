import styled from 'styled-components';


export const TopRankingWrapper = styled.div`

    width: 230px;
    margin-top: 20px;

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 19px 19px;

        .bgimg {
            position: relative;
            width: 80px;
            height: 80px;

            .msk {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: url(${require('@/assets/images/sprite_cover.png').default}) no-repeat -145px -57px;
            }
        }

        .tit {
            margin: 0 0 20px 10px;
            .btn {
                width: 116px;
                display: flex;
                
                .shard {
                    display: block;
                    width: 22px;
                    height: 22px;
                    background: url(${require('@/assets/images/sprite_02.png').default}) no-repeat;
                    text-indent: -9999px;
                }

                .icon-play {
                    margin-right: 10px;
                    background-position: -267px -205px;
                }

                .subscribe {
                    background-position: -300px -205px;
                }
            }
            
        }
    }

    .list {
        .list-item {
            position: relative;
            display: flex;
            align-items: center;
            height: 32px;
            :nth-child(-n+3) .rank {
                color: #c10d0c;
            }
            .rank {
                width: 35px;
                text-align: center;
                margin-left: 10px;
                font-size: 16px;
                color: #666666;
            }
            .info {
                color: #000;
                width: 170px;
                height: 17px;
                line-height: 17px;
                display: flex;
                justify-content: space-between;

                .name {
                    flex: 1;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .operate {
                    display: flex;
                    align-items: center;
                    display: none;
                    width: 82px;
                    .btn {
                        width: 17px;
                        height: 17px;
                        margin-left: 8px;
                        cursor: pointer;
                        outline: none;
                        border: none;
                        background: url(${require('@/assets/images/sprite_02.png').default}) no-repeat;
                    }
                    .play {
                        background-position: -267px -268px;
                    }
                    .addto {
                        position: relative;
                        top: 2px;
                        background: url(${require('@/assets/images/sprite_icon2.png').default}) no-repeat 0 -700px;
                    }
                    .favor {
                        background-position: -297px -268px;
                    }
                }
            }
            &:hover {
                .operate {
                    display: block;
                }
            }
        }
    }
    .footer {
        height: 32px;
        display: flex;
        align-items: center;
        margin-right: 32px;
        justify-content: flex-end;
        a {
            color: #000;
            font-size: 12px;
        }
    }
    
`