import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
    .disk {
        height: 186px;
        margin: 20px 0 37px;
        border: 1px solid #d3d3d3;
        background: #f5f5f5;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .album-roller {
        height: 150px;
        width: 645px;
        margin: 28px 0 0 0;

        .list {
            display: flex !important;
            justify-content: space-between;
            align-items: center;
        }
    }

    .disk-icon {
        width: 17px;
        height: 17px;
        margin-bottom: 20px;
        background: url(${require('@/assets/images/sprite_02.png').default}) no-repeat;
        cursor: pointer;
    }

    .disk-left {
        margin-right: 5px;
        background-position: -260px -75px;
    }

    .disk-right {
        background-position: -300px -75px;
    }


`