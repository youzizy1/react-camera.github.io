import React, { useState, useEffect } from 'react'
import {Container, Tab ,Wrapper} from './style'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export default function Searchk() {
  const navigate = useNavigate()
    const [show,setShow] = useState(false)  
    useEffect(() =>{
        setShow(true)
    },[])
  return (
    <CSSTransition   
        in={show} //用于判断是否出现的状态
        timeout={300} // 动画持续时间
        appear={true}   
        classNames="fly"  // classNames值，防止重复
        unmountOnExit //元素退场时，自动将DOM删除
        onExit={() =>{
          navigate(-1)
        }}
    >
      <Container>
    <Tab>
      
      <form action="">
        <p>
      <span className="bn">
        <input type="submit" value="搜索"/>
      </span>
      <span className="inp"><input type="text" placeholder='珠光' autoFocus></input></span>
    <span className="im" onClick = {() =>setShow(false)}>取消</span>  
      </p>
      </form>
    </Tab>
    <Wrapper>
        <h4>模板热榜</h4>
        <p>
        <a href="">1. 爱豆油画涂鸦头像（内容可替换）</a>
        <span>267.1w</span>
        </p>
        <p>
        <a href="">2. 夏天的浪漫/珠光</a>
        <span>52.5w</span>
        </p>
        <p>
        <a href="">3. 宫崎骏漫画调色</a>
        <span>29.3w</span>
        </p>
        <p>
        <a href="">4. 日出日落</a>
        <span>15.0w</span>
        </p>
        <p>
        <a href="">5. 珠光/关于夏天</a>
        <span>11.6w</span>
        </p>
        <p>
        <a href="">6. 文字壁纸~可替换两图</a>
        <span>8.1w</span>
        </p>
        <p>
        <a href="">7. 去海边走走吧</a>
        <span>6.6w</span>
        </p>
        <p>
        <a href="">8. 毕业季~ 奔向夏日</a>
        <span>6.5w</span>
        </p>
    </Wrapper>
    </Container>
    </CSSTransition>
  )
}
