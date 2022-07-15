import React ,{useEffect, useState} from 'react'
import { SearchWrapper,Tab } from './style'
import {Link} from 'react-router-dom'
import t from '../../../assets/images/t.jpg'
import {  Mask } from 'antd-mobile'
import { getLogin } from '../../../api/request'


export default function Search() {  
  // const [showuser,setShowuser] = useState(window.localStorage.getItem('showuser'))
  const [visible, setVisible] = useState(false)
  const [showlogo , setShowlogo] = useState(true)
  const [user,setUser] = useState([])
  useEffect(() =>{
    (async()=>{
      let { data }= await getLogin();
      // console.log(data);
      setUser(data);
    })()
  })
 
  // <span className="im" key={user.id}>{user.img}</span>
 if(!window.localStorage.getItem('showuser')){
  window.localStorage.setItem('showuser',''); 
 }else{
 
 }
const showuser = Boolean(window.localStorage.getItem('showuser'))
// console.log(typeof showuser)
  // console.log(showuser)
    return (
      <SearchWrapper>
        <Tab>
          <Link to="/select">
          <form action="">
          <span className="bn">
            <input type="submit" value="搜索"/>
          </span>
          <span className="inp"><input type="text" placeholder='珠光'></input></span>          
          </form>
          </Link>
         
         { showlogo && <span className="im"><img src={t}onClick={() => setVisible(true)}/></span>  }   
         { showuser && user.map(item => {
           return (
          <span className="im" key={item.id}><Link to="/geren"><img src={item.img}/></Link></span>  
      )
    }) }
    {/* {console.log(showuser)} */}
          {/* 遮罩层 */}
             <Mask visible={visible}  >
             <div className="content">  
                     <p>登录一甜相机</p>                        
                      <p> get专属于你的美颜相机!</p>
              <div className='btns'>
                <span onClick={() => setVisible(false)}>取消</span>
                <span className='login' onClick={() => (setShowlogo(false))}><Link to="/login" > 登录 </Link></span>
              </div>
                 </div>
              </Mask>    
        </Tab>       
      </SearchWrapper>
    )
  }