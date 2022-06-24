import React from 'react'
import { useEffect } from 'react'
import { BannersWrapper } from './style'
import Swiper from 'swiper'
import {Link} from 'react-router-dom'

export default function Banners({banners}) {

    useEffect(() =>{
        new Swiper('.btn-banners',{
            loop:true,
            pagination:{
                el:'.swiper-pagination' //幻灯片滑块
            },
            autoplay:{ //自动轮播
              delay:3000
          }
        })
    },[])

    const renderBanners1 = () => {
      let items = banners.slice(0,1); 
      return items.map(item =>{
        return (
          <Link to="" 
          className="swiper-item"
          key ={item.id}>
           <div>
            <p><img src={item.img} alt=""/></p>
  
              </div>
          </Link>
        )
      })
    }
    const renderBanners2 = () => {
      let items = banners.slice(1,2); 
      return items.map(item =>{
        return (
          <Link to="" 
          className="swiper-item"
          key ={item.id}>
           <div>
            <p><img src={item.img} alt=""/></p>
         
              </div>
          </Link>
        )
      })
    }
    const renderBanners3 = () => {
      let items = banners.slice(2,3); 
      return items.map(item =>{
        return (
          <Link to="" 
          className="swiper-item"
          key ={item.id}>
           <div>
            <p><img src={item.img} alt=""/></p>
            
              </div>
          </Link>
        )
      })
    }
    const renderBanners4 = () => {
      let items = banners.slice(3,4); 
      return items.map(item =>{
        return (
          <Link to="" 
          className="swiper-item"
          key ={item.id}>
           <div>
            <p><img src={item.img} alt=""/></p>
        
              </div>
          </Link>
        )
      })
    }
  return (
    <BannersWrapper>
      <div className="btn-banners swiper-container">
        <div className="swiper-wrapper">
        <div className="swiper-slide">
          {renderBanners1()}
          </div>
          <div className="swiper-slide">
          {renderBanners2()}
          </div>
          <div className="swiper-slide">
          {renderBanners3()}
          </div>
          <div className="swiper-slide">
          {renderBanners4()}
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </BannersWrapper>
  )
}
