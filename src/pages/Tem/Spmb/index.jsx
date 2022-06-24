import React ,{useState,useEffect} from 'react'
import {SpmbWrapper} from './style'
import SpmbList from './SpmbList'
// import {  getSpmb } from '../../../api/request'

export default function Spmb(props) {
  const [tab2,setTab2] = useState('hot')
  const ChangeTab2 = (tab2) =>{
    console.log(tab2)
    setTab2(tab2)
  }
 const [res,setRes] = useState([])
  useEffect(() => {
    let {spmbda} = props;
    if(tab2){
          switch(tab2){
             case"hot":
             spmbda  = spmbda.filter(item => item.type == "hot");
                break;
             case"spic":
             spmbda  = spmbda.filter(item => item.type == "spic");
                break;
             case"rhy":
             spmbda  = spmbda.filter(item => item.type == "rhy");
                break;
            case"sang":
              spmbda  = spmbda.filter(item => item.type == "sang");
                break;
             default:
                  break;
              }
            }
    setRes([...spmbda])
  },[tab2])
  return (
    <SpmbWrapper>
     <ul>
        <li><a  className={tab2=="hot"?"active":""} onClick={() =>setTab2('hot')}>热门</a></li>
        <li><a  className={tab2=="spic"?"active":""} onClick={() =>setTab2('spic')}>单图</a></li>
        <li><a  className={tab2=="rhy"?"active":""} onClick={() =>setTab2('rhy')}>节奏</a></li>
        <li><a  className={tab2=="sang"?"active":""} onClick={() =>setTab2('sang')}>热歌</a></li>
        <li><a  className={tab2=="cute"?"active":""} onClick={() =>setTab2('cute')}>可爱</a></li>
        <li><a  className={tab2=="dream"?"active":""} onClick={() =>setTab2('record')}>记录</a></li>
     </ul>
     <SpmbList  res={res}/>
    </SpmbWrapper>
  )
}
