import {TpmbWrapper} from './style'
import React ,{useState,useEffect} from 'react'
import TpmbList  from './TpmbList'
import { CapsuleTabs } from 'antd-mobile'
import WeUI from 'react-weui'  
const { Toast }  = WeUI; 
import classnames from 'classnames'
// import {  getTpmb } from '../../../api/request'
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
import Scroll from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'


 function Tpmb( props) { 
  let { tpmbList ,getTpmbDataDispatch} = props
  // let {tpmbda} = props;
  const [tpmbda,setTpmbda] = useState([])
  const [showloading,setShowLoading] = useState(false)
  const [tab1 ,setTab1 ] = useState('new')
  const changeTab1 = (tab1) => {
    setTab1(tab1)
  }
// useEffect(() =>{
//   (async()=>{
//     setShowLoading(true)
//     let { data:result} = await getTpmb()
//     switch(tab1){
//       case"hot":
//       result =result.filter(item => item.type == "hot");
//       break;
//       case"new":
//       result= result.filter(item => item.type == "new");
//       break;
//       case"summy":
//       result= result.filter(item => item.type == "summy");
//       break;
//       case"biye":
//       result= result.filter(item => item.type == "biye");
//       break;
//       default:
//         break;
//     }
//   setTpmbda([...result])
//   setShowLoading(false)
//   })() 
// },[tab1])
useEffect(() =>{
  getTpmbDataDispatch()
},[])
useEffect(() => {
  setShowLoading(true)
  if(tab1){
    switch(tab1){
      case"hot":
      tpmbList =tpmbList.filter(item => item.type == "hot");
      break;
      case"new":
      tpmbList= tpmbList.filter(item => item.type == "new");
      break;
      case"summy":
      tpmbList= tpmbList.filter(item => item.type == "summy");
      break;
      case"biye":
      tpmbList= tpmbList.filter(item => item.type == "biye");
      break;
      case"bizhi":
      tpmbList= tpmbList.filter(item => item.type == "bizhi");
      break;
      default:
        break;
    }
  }
  setTpmbda([...tpmbList])
  setShowLoading(false)
},[tab1])
   
  return (
    <TpmbWrapper>
      <CapsuleTabs  defaultActiveKey='2'>
          <CapsuleTabs.Tab className={classnames({active:tab1 == "hot"},'cap')} title={ <a   onClick={()=> changeTab1("hot")}>热门</a>} key='1'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab1 == "new"})} title={<a onClick={()=>changeTab1("new")}>最新</a>} key='2'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab1 == "biye"})} title={<a  onClick={()=>changeTab1("biye")}>毕业季</a>} key='3'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab  className={classnames({active:tab1 == "summy"})} title={<a onClick={()=>changeTab1("summy")}>夏日</a>} key='4'>
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab1 == "kuai"})} title={<a  onClick={()=>changeTab1("kuai")}>快手爆款</a>} key='5'>

          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab1 == "hbizhi"})} title={<a  onClick={()=>changeTab1("bizhi")}>壁纸</a>} key='6'>

          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab className={classnames({active:tab1 == "pai"},'cap')} title={<a  onClick={()=>changeTab1("pai")}>拍立得</a>} key='7'>

          </CapsuleTabs.Tab>
        </CapsuleTabs>
     {/* <ul >
        <li><a  className={tab1=="hot"?"active":""} onClick={()=> changeTab1("hot")}>热门</a></li>
        <li><a className={tab1=="new"?"active":""} onClick={()=>changeTab1("new")}>最新</a></li>
        <li><a  className={tab1=="biye"?"active":""} onClick={()=>changeTab1("biye")}>毕业季</a></li>
        <li><a  className={tab1=="summy"?"active":""} onClick={()=>changeTab1("summy")}>夏日</a></li>
        <li><a  className={tab1=="kuai"?"active":""} onClick={()=>changeTab1("kuai")}>快手爆款</a></li>
        <li><a  className={tab1=="bizhi"?"active":""} onClick={()=>changeTab1("bizhi")}>壁纸</a></li>
        <li><a  className={tab1=="pai"?"active":""} onClick={()=>changeTab1("pai")}>拍立得</a></li>
     </ul> */}
     <Toast icon="loading" show={showloading}>加载中</Toast> 
     <Scroll onScroll ={forceCheck}>
     <TpmbList  tpmbda={tpmbda}/> 
     </Scroll>
       
    </TpmbWrapper>
  )
}

const mapStateToProps = (state) =>{
  // console.log(state)
  return {
    tpmbList:state.Tem.tpmbList
  
  }
}

const mapDispatchToProps =( dispatch ) =>{
  return {
    
      getTpmbDataDispatch() {
        dispatch(actionCreators.getTpmbList())
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tpmb)