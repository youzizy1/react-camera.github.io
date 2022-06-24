import React from 'react'
import { SearchWrapper,Tab ,Wrapper} from './style'
import {Link } from 'react-router-dom'

export default function Searchk() {
  return (
    <SearchWrapper>
    <Tab>
      
      <form action="">
        <p>
      <span className="bn">
        <input type="submit" value="搜索"/>
      </span>
      <span className="inp"><input type="text" placeholder='珠光' autoFocus></input></span>
    <Link to="/temp"> <span className="im">取消</span></Link>  
      </p>
      </form>
    </Tab>
    <Wrapper>
        <h4>模板热榜</h4>
        <p>
        <a href="">1. 爱豆油画涂鸦头像（文字图片可替换）</a>
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
    </SearchWrapper>
  )
}
