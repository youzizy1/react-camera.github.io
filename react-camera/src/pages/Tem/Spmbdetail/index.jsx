import React, { useEffect ,useState,useRef} from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { Wrapper ,NavBar,List} from './style'  
import { CloseOutline , SendOutline } from 'antd-mobile-icons'
// import { getSpmb } from '../../../api/request'
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
import Lazyload, { forceCheck } from 'react-lazyload'
import tp from '../Spmb/SpmbList/tp.jpg'
import Scroll from '@/components/common/Scroll'
 
 function Spmbdetail(props) {  
  let { spmbList ,getSpmbDataDispatch,changeSpmbListStar} =props
  const navigate = useNavigate()
  const { id } = useParams()
  const [data2,setData2] = useState([])
  const [visible5, setVisible5] = useState(false)
  if(!id){
    navigate('/temp/spmb')
    return;
  }
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
  useEffect(() =>{
    getSpmbDataDispatch()
    // console.log(spmbList[id-1].img)
      setData2(spmbList.slice(id-1))
  },[])

const setStar = (id) =>{
  changeSpmbListStar(id)
  setData2(spmbList.slice(id-1))

}

  const renderSpmbdetail =() =>{
      return data2.map(item =>{
        return (
          <List key={item.id}>
            <NavBar>
              <CloseOutline   onClick={() => navigate(-1)} className="close"/>
              <SendOutline className='share'  onClick={() => {
                setVisible5(true)
              }}/>
            </NavBar>
            <Lazyload placeholder={<img 
            width="100%" height="100%"
            src={tp}/>
          }> 
          <div className='dw'>
          <video 
            controls="controls"   
            src={item.videos}
            onClick={onVideo} 
            ref={videoRef}
            loop
            autoPlay="autoplay"
            muted="true"
            /> 
            <p className='t'>{item.title}</p>
            <p>
            <span className='title'>{item.desc}</span>
            <span className='sc'>收藏{item.star2 ? item.star : item.star-1}</span>
          </p>
          </div>
           </Lazyload>
            <div className='caozuo'>
              <span className='star'><Rate 
                  className='star_a' 
                  count ={1} 
                  onChange={() =>setStar(item.id)}
              style={{
                '--active-color': '#ea84ae',
                '--inactive-color':'#fec7df'
              }}
              /></span>
              <span className='zi'>Get同款</span>
            </div>
          </List>
        )
      })
  }
  return (
    <Wrapper>
      {/* <Scroll onScroll={forceCheck}> */}
      {renderSpmbdetail()}
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
                <span>qq空间</span>
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
  console.log(state)
  return {
    spmbList:state.Tem.spmbList
  
  }
}

const mapDispatchToProps =( dispatch ) =>{
  return {
      getSpmbDataDispatch() {
        dispatch(actionCreators.getSpmbList())
      },
      changeSpmbListStar(data){
        dispatch(actionCreators.changeSpmbListStar(data))
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Spmbdetail)
