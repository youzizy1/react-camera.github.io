import React,{useState} from 'react'
import { Wrapper } from './style'
import { Link , useNavigate } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import classnames from 'classnames'
// import TabNav from '@/components/TabNav'
import Shoptui from './Shopstui'

export default function Shop() {  
    const navigate = useNavigate();
    const [ tab3,setTab3] = useState('tuijian');
   
  return (
    <Wrapper>
      <form action="">
            <span className='xh' onClick ={() =>navigate(-1)}> &lt;</span>
          <span className="bn">
            <input type="submit" value="搜索"/>
          </span>
          <span className="inp"><input type="text" placeholder='大家都在搜[夏日]'></input></span>          
          </form>
          <Tabs defaultActiveKey='2'>
          <Tabs.Tab className={classnames({active:tab3 == "sc"})} title={<a href="#" onClick={()=> setTab3("sc")}>收藏</a>} key='1' >1</Tabs.Tab>
          <Tabs.Tab className={classnames({active:tab3 == "tuijian"})} title={<a href="#" onClick={()=> setTab3("tuijian")} >推荐</a>}  key='2' >
            <Shoptui/>
            </Tabs.Tab>
          <Tabs.Tab className={classnames({active:tab3 == "vip"})} title={<a href="#" onClick={()=> setTab3("vip")} >VIP专享</a>}  key='3' />
          <Tabs.Tab className={classnames({active:tab3 == "acient"})} title={<a href="#" onClick={()=> setTab3("acient")} >复古</a>}  key='4' />
          <Tabs.Tab className={classnames({active:tab3 == "shou"})} title={<a href="#" onClick={()=> setTab3("shou")} >手账plog</a>}  key='5' />
          <Tabs.Tab className={classnames({active:tab3 == "fes"})} title={<a href="#" onClick={()=> setTab3("fes")} >节日</a>}  key='6' />
          <Tabs.Tab className={classnames({active:tab3 == "zazhi"})} title={<a href="#" onClick={()=> setTab3("zazhi")} >杂志边框</a>}  key='7' />
        </Tabs>
          {/* <ul>
            <li></li>
            <li><a href="#">推荐</a></li>
            <li><a href="#">VIP专享</a></li>
            <li><a href="#">复古</a></li>
            <li><a href="#">手账plog</a></li>
            <li><a href="#">节日</a></li>
            <li><a href="#">杂志边框</a></li>
          </ul> */}
    </Wrapper>
  )
}
