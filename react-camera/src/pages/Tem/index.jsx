import React,{useState,useEffect} from 'react'
import Search from './search'
import Banners from './Banners' 
import {Ht, Navbar ,EnterLoading,Loading} from './style'
import WeUI from 'react-weui'  
const { Toast }  = WeUI; 
import TpNav from '../../components/TpNav'
import { useNavigate,Outlet,Link,useSearchParams } from 'react-router-dom'
import { Popup,Button } from 'antd-mobile'
import t1 from '../../assets/images/t1.jpg'
import t2 from '../../assets/images/t2.jpg'
import t3 from '../../assets/images/t3.jpg'
import t4 from '../../assets/images/t4.jpg'
import t5 from '../../assets/images/t5.jpg'
import yu from '@/assets/images/yu.jpg'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import './style.css'

 function Tem(props) {   
  const { bannerList ,enterLoading,albumList} = props
  const {  getBannerDataDispatch ,getAlbumListDataDispatch} = props
  
  const navigate = useNavigate()
  const [search] = useSearchParams() 
  const [showloading,setShowLoading] = useState(false)
  const [tab ,setTab ] = useState('tpmb')
  const albumName = search.get('name') || '相册' 
  const [visible7, setVisible7] = useState(false)
  const [visible, setVisible] = useState(false)
  const backtop = () => {
    window.scrollTo(0,0)
}
  // useEffect(() =>{
  //   (async()=>{
  //     let {data:banner} = await getBanners();
  //     setBanners(banner)
  //   })()
  // })
  useEffect(() =>{
    getBannerDataDispatch()
    getAlbumListDataDispatch()
  },[])
  useEffect(() =>{
    navigate(`/temp/tpmb`)
  },[])


  const renderAlbums = () => {
    return albumList.map(({id,nm,img}) => {
        return <Link 
        className="album_name"
        to={{
          // pathname:'/home',
          search:`name= ${nm}`  // ? 后面的参数  0
        }}
        onClick={() => {
          setVisible(false)
        }}
        key= {id}>
         <img src={img} /> 
            {nm}
        </Link>
    })
  }

  const mockContent = (
  <div style={{ padding: '0.5rem' }}>
    <div
                onClick={() => {
                  setVisible(true)
                }}
                className="al"
              >
                <span>{albumName?albumName:''}</span>
                <i className="fa fa-sort-desc"></i>
              </div>
    <div className='imgs'>
        <img src={yu}/>
        <img src={yu}/>
        <img src={yu}/>
    </div>
    </div>
)
  return (
   <Ht>
    <Search />
    <Banners bannerList={bannerList}/>
   
    <Navbar>
    <div className="nav-links">
        <ul >
            <li><a className='lnk-xiutu' href="#" onClick={() => {
                setVisible7(true)
              }}><img src={t1}/></a>
              <Popup
              visible={visible7}
              showCloseButton
              onClose={() => {
                setVisible7(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '1px',
                borderTopRightRadius: '1px',
                minHeight: '100vh',
              }}
            >
               
              {mockContent}
            </Popup>
              </li>
              <Popup
          visible={visible}
          bodyStyle={{ height: '90vh' }}
        >
          <div style={{ padding: '24px' }} className="album" >
            {renderAlbums()}
          </div>
        </Popup>
            <li><a className='lnk-pintu' href="#" 
                onClick={() => {
                setVisible7(true)
              }}>
                <img src={t2}/></a>
              <Popup
              visible={visible7}
              showCloseButton
              onClose={() => {
                setVisible7(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '1px',
                borderTopRightRadius: '1px',
                minHeight: '100vh',
              }}
            >
              {mockContent}
            </Popup>
              </li>
            <li><a className='lnk-erciyuan' href="#" 
                onClick={() => {
                setVisible7(true)
              }}><img src={t3}/></a>
            <Popup
              visible={visible7}
              showCloseButton
              onClose={() => {
                setVisible7(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '1px',
                borderTopRightRadius: '1px',
                minHeight: '100vh',
              }}
            >
              {mockContent}
            </Popup>
            </li>
            <li><a className='lnk-tonghua' href="#"
                onClick={() => {
                setVisible7(true)
              }}><img src={t4}/></a>
            <Popup
              visible={visible7}
              showCloseButton
              onClose={() => {
                setVisible7(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '1px',
                borderTopRightRadius: '1px',
                minHeight: '100vh',
              }}
            >
              {mockContent}
            </Popup>
            </li>
            <li><a className='lnk-shop' href="#"><Link to ='/shop'><img src={t5}/></Link></a></li>
        </ul>
      </div>
      </Navbar>    
    <TpNav />
      <Toast icon="loading" show={enterLoading}>加载中</Toast>
      <Outlet/>
      <div className="back_top" onClick={backtop}>
        <i className="fa fa-angle-double-up"></i>
      </div>    
   </Ht>
  )
}
const mapStateToProps = (state) =>{
  return {
    bannerList:state.Tem.bannerList,
    enterLoading:state.Tem.enterLoading,
    albumList:state.Tem.albumList
  }
}

const mapDispatchToProps =( dispatch ) =>{
  return {
      getBannerDataDispatch() {
        dispatch(actionCreators.getBannerList())
        
      },
      getAlbumListDataDispatch() {
        dispatch(actionCreators.getAlbumList())
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Tem)