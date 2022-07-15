import React ,{ useEffect } from 'react'
import Swiper from 'swiper'
import { Wrapper } from './style'

export default function Shoptui() {
  let swiper = null
  useEffect(() =>{
      if(swiper) return 
      swiper = new Swiper('.navbar')
  },[])
  return (
    <Wrapper>
      Shopstar
    </Wrapper>
  )
}
