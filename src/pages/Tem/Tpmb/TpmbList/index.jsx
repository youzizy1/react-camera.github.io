import React,{useState} from 'react'
import {ListWrapper,List} from './style'
import {Toast } from 'antd-mobile'
// import { DemoBlock } from 'demos'



export default function TpmbList({da}) {
    // console.log(spmbda)
  return (
    <ListWrapper>
     { da.map(item => 
     <List key = {item.id}>
        <a href=''><img src={item.img} alt="" /></a>
        <p className="get" onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}>Get 同款</p>
      <p>{item.title}</p>
     </List>)}
   
    </ListWrapper>
  )
}
