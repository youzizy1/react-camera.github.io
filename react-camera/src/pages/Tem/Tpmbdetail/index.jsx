import React, { useEffect ,useState} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { Wrapper ,NavBar,List} from './style'  
import { CloseOutline , SendOutline } from 'antd-mobile-icons'
import { getTpmb } from '../../../api/request'
import { Popup,Button } from 'antd-mobile'
import p1 from '@/assets/images/p1.jpg'
import p2 from '@/assets/images/p2.jpg'
import p3 from '@/assets/images/p3.jpg'
import p4 from '@/assets/images/p4.jpg'
import p5 from '@/assets/images/p5.jpg'
import lj from '@/assets/images/lj.png'
import './style.css'
import { Rate ,Toast  } from 'antd-mobile'
import { connect } from 'react-redux'
import { actionCreators } from '../store/index'
 
 function Tpmbdetail(props) {
   let {  tpmbList,
          getTpmbDataDispatch, 
          changeTpmbListByIdDispatch,
          changeTpmbListStar,
          changetStarDispatch
        } = props
  const navigate = useNavigate()
  const { id } = useParams()
  const [data1,setData1] = useState([])
  const [visible5, setVisible5] = useState(false)
  // const [ attention,setAttention] = useState(false)
  if(!id){
    navigate('/temp')
    return;
  }
  // useEffect(() =>{
  //   ( async() => {
  //     let { data } = await getTpmb();  
  //     console.log(data[id-1].img)
  //     setData1(data[id-1])
  //   })()
  // },[])
  useEffect(() =>{
    getTpmbDataDispatch()
    // changeTpmbListByIdDispatch()
    // console.log(tpmbList[id-1].img)
    setData1(tpmbList.slice(id-1))
  },[])

const setAttention = (id) =>{
  console.log('=====')
  changeTpmbListByIdDispatch(id)
  setData1(tpmbList.slice(id-1))
}

const setStar = (id) => {
  changeTpmbListStar(id)
  // changetStarDispatch(id)
  setData1(tpmbList.slice(id-1))
}

  const renderTpmbdetail =() => {
    return data1.map(item =>{
      return (
        <List key = {item.id}>
             <NavBar>
          <CloseOutline   onClick={() => navigate(-1)} className="close"/>
              {item.artist}<span className='gz' onClick={() =>setAttention(item.id)}>{ (item.attention)?'已关注':'关注'}</span>
             {/* { console.log(item.attention)} */}
              <SendOutline className='share'  onClick={() => {
                setVisible5(true)
              }}/>
            </NavBar>
            <div className='dw'>
            <img src={item.img} alt="" />
          <p>
            <span className='title'>{item.title}</span>
            <span className='sc'>收藏{item.star1 ? item.star : item.star-1}</span>
          </p>
            </div>
            <div className='caozuo'>
              <span className='star'><Rate className='star_a' count ={1} 
              style={{
                '--active-color': '#ea84ae',
                '--inactive-color':'#fec7df'
              }}
              onChange={() =>setStar(item.id)}
              /></span>
              <span className='zi'>Get同款</span>
            </div>
        </List>
      )
    })
  }
  return (
    <Wrapper>
      {renderTpmbdetail()} 
            <Popup
              visible={visible5}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '40vh',
              }}
              className="popup"
            >   
            <div className='pic'>
              <a href="#">
                <img src={p1} alt="" />
                <span>微信</span>
                </a>
              <a href="#">
                <img src={p2} alt="" />
                <span>朋友圈</span>
                </a>
              <a href="#">
                <img src={p3} alt="" />
                <span>QQ</span>
                </a>
              <a href="#">
                <img src={p4} alt="" />
                <span>QQ空间</span>
                </a>
              <a href="#">
                <img src={p5} alt="" />
                <span>微博</span>
                </a>
              </div>    
              <hr className='hr'/>
              <div  className='lj'>
                <img src={lj} alt="" onClick={()=>Toast.show('复制成功！')} style={{width:'3rem',height:'3rem',marginLeft:'1rem'}}/>
                <div style={{marginLeft:'1rem'}}>复制链接</div>
                </div>
                <hr className='hr'/>
            <div className="cancel" onClick={() => {setVisible5(false)}}> 取消</div>
            </Popup>
    </Wrapper> 
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
      },
      changeTpmbListByIdDispatch(data) {
        dispatch(actionCreators.changeTpmbListById(data))
      },
      changeTpmbListStar(data){
        dispatch(actionCreators.changeTpmbListStar(data))
      },
      // changetStarDispatch(data){
      //   dispatch(changetpStar(data))
      // }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tpmbdetail)
