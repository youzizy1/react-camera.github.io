import React,{useState,useEffect} from 'react'
import { Wrapper ,Tab,Nodata} from './style'
import { CloseOutline  } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import tou from './tou.jpg'
import wu from './wu.jpg'
import { connect } from 'react-redux'  
import { actionCreators } from './store/index'

 function Geren(props) {
  const { TpmbStar,SpmbStar } = props
  // const {
  //   getTpmbStarDispatch,
  //   getSpmbStarDispatch
  // } = props
  const navigate = useNavigate()
  const [tab,setTab ] = useState('tp')
useEffect(() =>{
  // getTpmbStarDispatch()
  // getSpmbStarDispatch()
},[])

  return (
    <Wrapper>
      <div className='backg'>
      <CloseOutline   onClick={() => navigate(-1)} className="close"/>
      <p>拍出高甜少女感</p>
      <div className='fu'>
        <img src={tou} alt="" />
        <p>
          <span className="name">四月</span>
          <span className="btn"> 编辑</span>
          </p>
          <p className='star'>一甜ID:2555887445</p>
          <p className='star1'>
            <span>0 关注</span>
            <span>0 收藏</span>
          </p>
      </div>
      </div>
      <Tab>
      <li>
        <a className={tab=="tp"?'active':''} onClick={() =>setTab('tp')}>
          <span>图片收藏</span>
        </a>
        </li>
      <li>
        <a className={tab=="sp"?'active':''} onClick={()=>setTab('sp') }>
        <span>视频收藏</span>
        </a>
        </li>
      </Tab>
      { TpmbStar.length == 0 && <Nodata>
        <img src={wu} alt="" />
        </Nodata>}
      { SpmbStar.length == 0 && <Nodata>
        <img src={wu} alt="" />
        </Nodata>}
    </Wrapper>
  )
}

const mapStateToProps = (state) =>{  
  console.log(state)
  return {
    TpmbStar:state.Geren.TpmbStar,
    SpmbStar:state.Geren.SpmbStar
  }
}

const mapDispatchToProps = ( dispatch ) =>{
    return {
      // getTpmbStarDispatch() {
      //   dispatch(actionCreators.changetpStar())
      // },
      // getSpmbStarDispatch() {
      //   dispatch(actionCreators.changespStar())
      // }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Geren)
