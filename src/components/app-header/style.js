import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
    height:75px;
    background-color: #242424;
    
    .content {
        width: 1100px;
        height: 70px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
`


export const HeaderLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        display: block;
        width: 176px;
        height: 69px;
        background: url(${require("@/assets/images/sprite_01.png").default}) no-repeat 0 0;
        text-indent: -9999px;
    }
    
    .select-item {
        position: relative;

        :last-of-type a {
            position: relative;
            ::after {
                position: absolute;
                content: "";
                width: 28px;
                height: 19px;
                background: url(${require("@/assets/images/sprite_01.png").default}) no-repeat -190px 0;
                top: 20px;
                right: -15px;
            }
        }

        .link {
            color: #C0C0C0;
            font-size: 14px;
            text-decoration: none;
            padding: 0 19px;
            display: block;
            line-height: 70px;

            &:hover {
                color: #fff;
                background-color: #000;
            }
        }
        .active {
            color: #fff;
            background-color: #000;
            .icon {
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%, 0);
                background : url(${require("@/assets/images/sprite_01.png").default}) no-repeat -226px 0;  
            }
        }
    }
`


export const HeaderRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .search {
        border-radius: 32px;
        width: 158px;
        height: 32px;
        input::placeholder {
            font-size: 12px;
        }
    }

    .creator-center {
        width: 90px;
        height: 32px;
        margin: 0 12px;
        color: #C0C0C0;
        font-size: 12px;
        background-color: transparent;
        border: 1px solid #666;
        border-radius: 32px;
        cursor: pointer;
        outline: none;

        &:hover {
            color: #fff;
            border-color: #fff;
        } 
    }

    .login {
        font-size: 12px;
        color: #787878;
        cursor: pointer;
        &:hover {
            color: #fff;
            border-color: #fff;
            text-decoration: underline;
        } 
    }
`