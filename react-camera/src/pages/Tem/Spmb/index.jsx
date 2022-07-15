import React ,{useState,useEffect} from 'react'
import {SpmbWrapper} from './style'
import SpmbList from './SpmbList'
import { CapsuleTabs } from 'antd-mobile'
import classnames from 'classnames'
// import {  getSpmb } from '../../../api/request'
import WeUI from 'react-weui'  
const { Toast }  = WeUI; 
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'

 function Spmb(props) {
  let { spmbList ,getSpmbDataDispatch} = props
  const [tab2,setTab2] = useState('hot')
  const [showloading,setShowLoading] = useState(false)
  const ChangeTab2 = (tab2) =>{
    console.log(tab2)
    setTab2(tab2)
  }
  const [spmbda,setSpmbda] = useState([])
  // useEffect(() => {
  //   (async()=>{
  //     let {data:spmbda} = await getSpmb()
  //    if(tab2){
  //     switch(tab2){
  //        case"hot":
  //        spmbda  = spmbda.filter(item => item.type == "hot");
  //           break;
  //        case"spic":
  //        spmbda  = spmbda.filter(item => item.type == "spic");
  //           break;
  //        case"rhy":
  //        spmbda  = spmbda.filter(item => item.type == "rhy");
  //           break;
  //       case"sang":
  //         spmbda  = spmbda.filter(item => item.type == "sang");
  //           break;
  //        default:
  //             break;
  //         }
  //       }
  //       setSpmbda([...spmbda])
  //   })()
  // },[tab2])
  useEffect(() =>{
    getSpmbDataDispatch()
  })
  useEffect(() =>{
    if(tab2){
          switch(tab2){
             case"hot":
             spmbList  = spmbList.filter(item => item.type == "hot");
                break;
             case"spic":
             spmbList  = spmbList.filter(item => item.type == "spic");
                break;
             case"rhy":
             spmbList  = spmbList.filter(item => item.type == "rhy");
                break;
            case"sang":
            spmbList  = spmbList.filter(item => item.type == "sang");
                break;
            case"record":
              spmbList  = spmbList.filter(item => item.type == "record");
                break;
             default:
                  break;
              }
            }
            setSpmbda([...spmbList])
  },[tab2])
  return (
    <SpmbWrapper>
       <CapsuleTabs  defaultActiveKey='1'>
          <CapsuleTabs.Tab className={classnames({active:tab2 == "hot"})} title={ <a   onClick={()=> setTab2("hot")}>热门</a>} key='1'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab2 == "spic"})} title={<a onClick={() =>setTab2('spic')}>单图</a>} key='2'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab2 == "rhy"})} title={<a  onClick={() =>setTab2('rhy')}>节奏</a>} key='3'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab  className={classnames({active:tab2 == "sang"})} title={<a onClick={() =>setTab2('sang')}>热歌</a>} key='4'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab2 == "cute"})} title={<a  onClick={() =>setTab2('cute')}>可爱</a>} key='5'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab2 == "record"})} title={<a  onClick={() =>setTab2('record')}>记录</a>} key='6'>
          </CapsuleTabs.Tab>
        </CapsuleTabs>
     {/* <ul>
        <li><a  className={tab2=="hot"?"active":""} onClick={() =>setTab2('hot')}>热门</a></li>
        <li><a  className={tab2=="spic"?"active":""} onClick={() =>setTab2('spic')}>单图</a></li>
        <li><a  className={tab2=="rhy"?"active":""} onClick={() =>setTab2('rhy')}>节奏</a></li>
        <li><a  className={tab2=="sang"?"active":""} onClick={() =>setTab2('sang')}>热歌</a></li>
        <li><a  className={tab2=="cute"?"active":""} onClick={() =>setTab2('cute')}>可爱</a></li>
        <li><a  className={tab2=="dream"?"active":""} onClick={() =>setTab2('record')}>记录</a></li>
     </ul> */}    
      {/* <Toast icon="loading" show={EnterLoading}>加载中</Toast> */}
    <Scroll onScroll ={forceCheck}>
    <SpmbList  spmbda={spmbda}/>
    </Scroll>
    </SpmbWrapper>
  )
}

const mapStateToProps = (state) =>{
  // console.log(state)
  return {
    spmbList:state.Tem.spmbList,
    EnterLoading:state.Tem.enterLoading
  
  }
}

const mapDispatchToProps =( dispatch ) =>{
  return {
      getSpmbDataDispatch() {
        dispatch(actionCreators.getSpmbList())
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Spmb)
