import React from 'react' 
import styled from 'styled-components'
 

export const FooterWrapper = styled.div`
    position:fixed;
    height: 50px;
    width: 100%;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid silver;
    background-color:#fff;
    a {
        flex:1;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        text-decoration:none;
        text-align: center;
        color:grey;
       &.active{
        color: #000;
       } 
    }
`