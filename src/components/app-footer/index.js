// @ts-nocheck
import React, { memo,Fragment } from 'react'

import {
    AppFooterWrapper,
    FooterLeft,
    FooterRight
} from './style';
import {
    footerlinks,
    footerImages
} from '@/common/local-data.js';

export default memo(function AppFooter() {

    const filterLink = (item,index) => {
        if (index === 4) {
            return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
        } else {
            return (
                <>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className="line">|</span>
                </>
            )
        }
    }

    return (
        <AppFooterWrapper>
            <div className="content">
                <FooterLeft>
                    <div>
                        {
                            footerlinks.map((item,index) => {
                                return (
                                    <Fragment key={item.title}>
                                        {filterLink(item,index)}
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div>
                        <span className="sep">
                            网易公司版权所有©1997-2021
                        </span>
                        <span>
                            杭州乐读科技有限公司运营：浙网文[2018]3506-263号
                        </span>
                    </div>
                    <div>
                        <span className="sep">
                            违法和不良信息举报电话：0571-89853516
                        </span>
                        <span>
                            举报邮箱：ncm5990@163.com
                        </span>
                    </div>
                    <div>
                        <span className="sep">
                            粤B2-20090191-18
                        </span>
                        <span className="sep">
                            工业和信息化部备案管理系统网站 
                        </span>
                        <span>
                            浙公网安备 33010902002564号
                        </span>
                    </div>
                </FooterLeft>
                <FooterRight>
                    {
                        footerImages.map(item => {
                            return (
                                <li className="item" key={item.link}>
                                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                                    <span className="title"></span>
                                </li>
                            )
                        })
                    }
                </FooterRight>
            </div>
        </AppFooterWrapper>
    )
})
