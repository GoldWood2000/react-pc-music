// @ts-nocheck
import React, { memo } from 'react';

import {
    RecommendWrapper,
    RecommendContent,
    RecommendContentWrapper,
    RecommendContentLeft,
    RecommendContentRight
} from './style';

import TopBanner from './c-components/top-banner';
import HotRecommend from './c-components/hot-recommend';
import NewAlbum from './c-components/new-album';
import RankingList from './c-components/ranking-list';
function Recommend() {
    return (
        <RecommendWrapper>
            <TopBanner />
            <RecommendContent>
                <RecommendContentWrapper>
                    <RecommendContentLeft>
                        <HotRecommend />
                        <NewAlbum />
                        <RankingList />
                    </RecommendContentLeft>
                </RecommendContentWrapper>
                <RecommendContentRight>

                </RecommendContentRight>
            </RecommendContent>
        </RecommendWrapper>
    )
}

export default memo(Recommend)

// 没有使用hook
// const mapStateToProps = state => {
//     return {
//         topBanner: state.topBanner
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         initTopBanner: () => {
//             dispatch(getTopBanner())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))