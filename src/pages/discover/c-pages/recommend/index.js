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
import ThemeHeaderRCM from '@/components/theme-header-rcm';
function Recommend() {
    return (
        <RecommendWrapper>
            <TopBanner />
            <RecommendContent>
                <RecommendContentWrapper>
                    <RecommendContentLeft>
                        <ThemeHeaderRCM title="热门推荐" tab={["华语","流行","摇滚","民谣","电子"]}/>
                        <ThemeHeaderRCM title="新碟上架" />
                        <ThemeHeaderRCM title="榜单" />
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