import React, { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';

import {
    ThemeHeaderRCMWrapper,
    ThemeHeaderTab,
    ThemeHeaderMore
} from './style';

export default memo(function ThemeHeaderRCM(props) {

    const { title, tab = [] } = props;

    return (
        <ThemeHeaderRCMWrapper>
            <div className="left">
                <NavLink className="title" to="/discover/playlist">{title}</NavLink>
                <ThemeHeaderTab>
                    {
                        tab.map((item, index) => {
                            return (
                                <Fragment key={item}>
                                    <NavLink className="tab-item" to="">{item}</NavLink>
                                    {index !== tab.length-1 ? <span className="line">|</span> : null}
                                </Fragment>
                            )
                        })
                    }
                </ThemeHeaderTab>
            </div>

            <ThemeHeaderMore>
                <NavLink className="more-txt" to="">更多</NavLink>
                <i className="icon"></i>
            </ThemeHeaderMore>
        </ThemeHeaderRCMWrapper>
    )
})
