import React,{useState,useEffect} from 'react'
import Search from './search'
import Banners from './Banners'
import Tpmb from './Tpmb'
import Spmb from './Spmb'
// import Childrenrouter from './Childrenrouter'
import { getBanners, getTpmb, getSpmb } from '../../api/request'  
import { Navbar ,Links} from './style'
import WeUI from 'react-weui'  
const { Toast }  = WeUI; 



export default function Tem() {
  const [showloading,setShowLoading] = useState(false)
  const [showTpmb,setShowTpmb] = useState(false)
  const [showSpmb,setShowSpmb] = useState(false)
  const [tab ,setTab ] = useState('tpmb')
  const [banners,setBanners] = useState([])
  const [tpmbda,setTpmbda] = useState([])
  const [spmbda,setSpmbda] = useState([])
  useEffect(() =>{
    (async()=>{
      setShowLoading(true)
      let {data:banner} = await getBanners();
      setBanners(banner)
     let { data:result} = await getTpmb()
     setTpmbda(result)
     let {data:spm} = await getSpmb()
     setSpmbda(spm)
     setShowLoading(false)
      // console.log(data)
      if(tab == "tpmb"){
        setShowTpmb(true)
        setShowSpmb(false)
      }else if(tab == "spmb"){
        setShowTpmb(false) 
        setShowSpmb(true)
      }
    })()
  },[tab])

  return (
   <div>
    <Search />
    <Banners banners={banners}/>
    <Navbar>
    <div className="nav-links">
        <ul >
            <li><a className='lnk-xiutu' href="">修图</a></li>
            <li><a className='lnk-pintu' href="">拼图</a></li>
            <li><a className='lnk-erciyuan' href="">二次元脸</a></li>
            <li><a className='lnk-tonghua' href="">童话脸</a></li>
        </ul>
      </div>
    </Navbar>
   
    <Links>
    <ul >
      <li>
        <a className={tab=="tpmb"?'active':''} onClick={() =>setTab('tpmb')}>
          <span>图片模板</span>
        </a>
        </li>
      <li>
        <a className={tab=="spmb"?'active':''} onClick={()=>setTab('spmb') }>
        <span>视频模板</span>
        </a>
        </li>
    </ul>  
      </Links>
      <Toast icon="loading" show={showloading}>加载中</Toast>
     {showTpmb && <Tpmb tpmbda={tpmbda}  />}
    
      {showSpmb && <Spmb spmbda={spmbda}/>}
   </div>
  )
}