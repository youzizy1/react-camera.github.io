import React, { useEffect } from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './style'

export default function TabNav() {
   
    // 页面二级路由的导航准备
    let TpNavs = [
        { id: 1, desc: '收藏', path: 'star'},
        { id: 2, desc: '推荐', path: 'tuijian'},
        { id: 3, desc: 'VIP专享', path: 'vip'},
        { id: 4, desc: '复古', path: 'fugu'},
        { id: 5, desc: '手账plog', path: 'plog'},
        { id: 6, desc: '节日', path: 'fes'},
        { id: 7, desc: '边框杂志', path: 'zazhi'}
        
    ]
    return (
        <Wrapper>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                {
                    TpNavs.map((item, index) => {
                        return (
                            <NavLink
                                index={index}
                                to={`/temp/${item.path}`}
                                key={item.id}
                                className="nav-item swiper-slide"
                            >
                            {item.desc}
                            </NavLink>
                        )
                    })
                }
                </div>
            </div>
        </Wrapper>
    )
}

TabNav.propTyes = {
    id: propTyes.string.isRequired
}