import styled from 'styled-components'

export const SpmbWrapper = styled.div`
    margin-top:10px;
    text-align:center;
    ul{
        display: flex;
        list-style-type:none;
        overflow: auto;
        li {
            width: 80px;
            height: 30px;
            display: inline-block;
            flex-shrink: 0;
            
            a {
               
                color:grey;
                display: inline-block;
                width: 100%;
                height: 25px;
                margin: 0 auto 15px;
                text-decoration:none;
                &.active {
                    color:#000;
                    font-weight: bold;
                    border-radius:50px;
                    background-color:rgba(0,0,0,.2)
                }
            }
        }
    }
`