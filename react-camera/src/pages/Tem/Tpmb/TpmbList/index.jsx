import React,{useEffect, useState} from 'react'
import {ListWrapper,List} from './style'
import {Toast ,InfiniteScroll} from 'antd-mobile'
import { Link } from 'react-router-dom'
import Lazyload from 'react-lazyload'
import tp from './tp.jpg';




 function TpmbList({tpmbda}) {

  // const [hasMore, setHasMore] = useState(true)
  // const [data, setData] = useState([])
  //   let count =0;
  //   async function loadMore() {   
  //     const append = await mock()
  //     setData(() => [...append])
  //     // setHasMore(append.length > 0)
  //   }
  //  function mock() {
  //     console.log(tpmbda)
  //     // await sleep(2000)
  //     // count++
  //     return [
  //       ...tpmbda
  //     ]
  //   }
  
  return (
    <ListWrapper>
     {tpmbda.map(item => 
    <Link to ={`/tpmbdetail/${item.id}`} key = {item.id}>
      <List key = {item.id}>
        <div className="img_wrapper">
        <Lazyload placeholder={<img 
        width="100%" height="100%"
        src={tp}/>
      }>
       <img src={item.img} alt="" />
        </Lazyload>
        </div>
       
        
        <p className="get" onClick={() => {
              Toast.show({
                icon: 'loading',
                content: '加载中…',
              })
            }}>Get 同款</p>
      <p className='title'>{item.title}</p>
     </List></Link>)}
     
     {/* <InfiniteScroll loadMore={loadMore}  /> */}
    </ListWrapper>
  )
}

export default React.memo(TpmbList)
