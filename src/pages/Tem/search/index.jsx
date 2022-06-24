import React from 'react'
import { SearchWrapper,Tab } from './style'
import {Link} from 'react-router-dom'

export default function Search() {
    return (
      <SearchWrapper>
        <Tab>
          <Link to="/select">
          <form action="">
            <p>
          <span className="bn">
            <input type="submit" value="搜索"/>
          </span>
          <span className="inp"><input type="text" placeholder='珠光'></input></span>
          <span className="im"></span>
          </p>
          </form>
          </Link>
        </Tab>       
      </SearchWrapper>
    )
  }