import styled from 'styled-components'

export const TpmbWrapper = styled.div`
    margin-top:0.5rem;
    text-align:center;
    a{
        font-size:14px;
        color: #000;
        &.active {
            color: #000;
        }
    }
     .adm-capsule-tabs-tab {
        
        padding: 0.3rem 0.8rem;
        /* background-color: rgba(255,255,255,.) !important; */
    }
    .adm-capsule-tabs-tab-active{
        color:black;
        background-color:silver;
        
    }
    ul{
        display: flex;
        list-style-type:none;
        overflow: auto;
        li {
            width: 4rem;
            height: 1.5rem;
            display: inline-block;
            flex-shrink: 0;
            
            a {
                color:grey;
                text-align: center;
                display: inline-block;
                width: 100%;
                height: 1.25rem;
                margin: 0 auto 0.75rem;
                text-decoration:none;
                &.active {
                    color:#000;
                    font-weight: bold;
                    border-radius:2.5rem;
                    background-color:rgba(0,0,0,.2)
                }
            }
        }  
    }
`