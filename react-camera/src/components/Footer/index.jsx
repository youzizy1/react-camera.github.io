import React from 'react'
import {FooterWrapper} from './style'
import {Link,useLocation} from 'react-router-dom'
import classnames from 'classnames'
import { isPathPartlyExisted} from '@/utils'

const Footer =() => {
  const {pathname} = useLocation()
  if(isPathPartlyExisted(pathname)) return 
  // if(['/select','/login'].indexOf(pathname) != -1 ) return 
  return(
    <FooterWrapper>
      <Link to="/temp" className={classnames({active:pathname == '/temp'})}>
            <span>模板</span>
          </Link>
        <Link to="/pz" className={classnames({active:pathname == '/pz'})}>      
            <span>拍照</span>
          </Link> 
          <Link to="/vedio" className={classnames({active:pathname == '/vedio'})}>
            <span>视频</span>
          </Link>
          <Link to="/kd" className={classnames({active:pathname == '/kd'})}>
            <span>跟拍卡点</span>
          </Link>   
            
    </FooterWrapper>  
  )
}

export default  Footer