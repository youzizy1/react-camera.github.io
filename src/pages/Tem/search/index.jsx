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
            <input type="submit" value="ๆ็ดข"/>
          </span>
          <span className="inp"><input type="text" placeholder='็ ๅ'></input></span>
          <span className="im"></span>
          </p>
          </form>
          </Link>
        </Tab>       
      </SearchWrapper>
    )
  }