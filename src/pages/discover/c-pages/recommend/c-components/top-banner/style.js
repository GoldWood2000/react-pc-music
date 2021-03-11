// @ts-nocheck
import styled from 'styled-components';


export const TopBannerWrapper = styled.div`
    background: url(${props => props.bgImage + '?imageView&blur=40x20'}) no-repeat center center;
    background-size: 6000px;

    .banner {
        width: 982px;
        height: 285px;
        display: flex;
        margin: 0 auto;
        position: relative;
    }
`

export const BannerLeft = styled.div`
    width: 730px;

    .imag {
        width: 100%;
        height: 285px;
    }
`

export const BannerRight = styled.div`
    width: 252px;
    background : url(${require("@/assets/images/download.png").default}) no-repeat 0 0;  
    cursor: pointer;
`

export const BannerControl = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    /* transform: translateY(-50%); */
    margin-top: -31px;
    .btn {
        outline: none;
        border: none;
        position: absolute;
        width: 37px;
        height: 63px;
        
        background-image: url(${require("@/assets/images/banner_sprite.png").default});
        background-color: transparent;
        cursor: pointer;
        &:hover {
            background-color: rgba(0, 0, 0, .1);
        }
    }
    .left {
        left: -68px;
        background-position: 0 -360px;
    }
    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`