import React from 'react'
import styled from 'styled-components'


export const FooterWrapper = styled.div`
    position:fixed;
    height: 2.5rem;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 2.5rem;
    border-top: 0.05rem solid silver;
    background-color:#fff;
    a {
        flex:1;
        flex-direction:column;
        text-decoration:none;
        text-align: center;
        color:grey;
       &.active{
        color: #000;
       } 
    }
`