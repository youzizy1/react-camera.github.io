import {TpmbWrapper} from './style'
import React ,{useState,useEffect} from 'react'
// import {  getTpmb } from '../../../api/request'
import TpmbList  from './TpmbList'
import WeUI from 'react-weui'  
const { Toast }  = WeUI; 


export default function Tpmb(props) {
  let {tpmbda} = props;
  const [showloading,setShowLoading] = useState(false)
  const [tab1 ,setTab1 ] = useState('new')
  const changeTab1 = (tab1) => {
    setTab1(tab1)
  }
  const [da,setDa] = useState([])
useEffect(() =>{
  console.log(tpmbda)
  setShowLoading(true)
    switch(tab1){
      case"hot":
      tpmbda =tpmbda.filter(item => item.type == "hot");
      break;
      case"new":
      tpmbda = tpmbda.filter(item => item.type == "new");
      break;
      case"summy":
      tpmbda= tpmbda.filter(item => item.type == "summy");
      break;
      default:
        break;
    }
  setDa([...tpmbda])
  setShowLoading(false)
},[tab1])
  return (
    <TpmbWrapper>
     <ul >
        <li><a  className={tab1=="hot"?"active":""} onClick={()=> changeTab1("hot")}>热门</a></li>
        <li><a className={tab1=="new"?"active":""} onClick={()=>changeTab1("new")}>最新</a></li>
        <li><a  className={tab1=="biye"?"active":""} onClick={()=>chan("biye")}>毕业季</a></li>
        <li><a  className={tab1=="summy"?"active":""} onClick={()=>changeTab1("summy")}>夏日</a></li>
        <li><a  className={tab1=="kuai"?"active":""} onClick={()=>changeTab1("kuai")}>快手爆款</a></li>
        <li><a  className={tab1=="bizhi"?"active":""} onClick={()=>changeTab1("bizhi")}>壁纸</a></li>
        <li><a  className={tab1=="pai"?"active":""} onClick={()=>changeTab1("pai")}>拍立得</a></li>
     </ul>
     <Toast icon="waiting-circle" show={showloading}>加载中</Toast>
     <TpmbList da={da}/>        
    </TpmbWrapper>
  )
}
