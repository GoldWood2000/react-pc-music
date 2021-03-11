import styled from 'styled-components';

export const ThemeHeaderRCMWrapper = styled.div`
    height: 33px;
    background: url(${require('@/assets/images/sprite_02.png').default}) no-repeat -225px -156px;
    border-bottom: 2px solid #C10D0C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 34px;

    .title {
        font-size: 20px;
        font-family: "Microsoft Yahei";
        color: #333;
    }

    .left {
        display: flex;
        align-items: center;
    }
`

export const ThemeHeaderTab = styled.div`
    margin: 0 0 0 20px;
    .tab-item {
        font-size: 12px;
        color: #666;
        &:hover {
            text-decoration: underline; 
        }
    }

    .line {
        margin: 0 10px;
        color: #ccc;
    }
`

export const ThemeHeaderMore = styled.div`
    display: flex;
    align-items: center;
    .more-txt {
        font-size: 12px;
        color: #666;
        &:hover {
            text-decoration: underline; 
        }
    }
    .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        background: url(${require('@/assets/images/sprite_02.png').default}) no-repeat 0 -240px;
    }
`