import React, { useEffect } from 'react'
import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Swiper from 'swiper'
import { Wrapper } from './style'

export default function TpNav() {
    let swiper = null
    useEffect(() =>{
        if(swiper) return 
        swiper = new Swiper('.navbar')
    },[])
    // 页面二级路由的导航准备
    let TpNavs = [
        { id: 1, desc: '图片模板', path: 'tpmb'},
        { id: 2, desc: '视频模板', path: 'spmb'}
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

TpNav.propTyes = {
    id: propTyes.string.isRequired
}