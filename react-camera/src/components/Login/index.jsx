import React, { useEffect,useState } from 'react'
import { Wrapper } from './style' 
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from 'antd-mobile'
import './style.css'


export default function Login() {
  let navigate = useNavigate()

    window.localStorage.showuser = 'showuser'
    const [check,setCheck ] = useState(false)
 
  const setSelect = () =>{
    if(check){
      navigate('/temp/tpmb')
    }else{
      Modal.alert({
        content: '请勾选同意后再进行登录'
      })
    }
  }
  return (
    <Wrapper >
     <p className='back'> <Link to='/temp'>&lt;</Link></p>
     <p className='title'>
      <span className='title_img'></span>
      <span className='title_ys'>一甜相机</span>
     </p>
     <p className='des'>登录一甜相机，记录你的专属美颜！</p>  
    <div className="button" onClick={()=>setSelect()}>登录</div>
    <div className='proto'>
    <input type="checkbox" name="test" check={check} onClick={()=>setCheck(!check)}/>我已阅读并同意以下协议  
    <p>《用户协议》|《隐私政策》</p>
    </div>
  
    </Wrapper>
  )
}
