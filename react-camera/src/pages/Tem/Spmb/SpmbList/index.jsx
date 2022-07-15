import React,{ useState,useRef} from 'react'
import {ListWrapper,List} from './style'
import {Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import Lazyload from 'react-lazyload'
import tp from './tp.jpg'

export default function SpmbList({spmbda}) {
  const videoRef = useRef(null)  
  const [play,setPlay] = useState(false)  
  const onVideo = () =>{
    if(play) {
      videoRef.current.pause();
      setPlay(false)
    }else{
      videoRef.current.play();
      setPlay(true)
    }
  }
   return (
    <ListWrapper>
     { spmbda.map(item => 
     <Link to ={`/spmbdetail/${item.id}`} key = {item.id}>
     <List key = {item.id}>
     <div className="img_wrapper">
     <Lazyload placeholder={<img 
        width="100%" height="100%"
        src={tp}/>
      }>      
          <video 
          src={item.videos} 
          onClick={onVideo} 
          ref={videoRef}
          loop
          />
          </Lazyload>
          </div>
        <p className="get" onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}>Get 同款</p>
      <p>{item.title}</p>
      <p className='xiao'>{item.desc}</p>
     </List>
     </Link>
     )}
   
    </ListWrapper>
  )
}
