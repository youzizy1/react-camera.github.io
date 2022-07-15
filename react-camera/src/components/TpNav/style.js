import styled from 'styled-components'

 export const Wrapper = styled.div`
    .navbar{
    height: 35px;
    background:#fff;
    .nav-box{
        height: 35px!important;
        line-height: 35px!important;
    }
    .nav-item{
        width:auto!important;
        position: relative;
        /* -webkit-flex: 1; */
        /* flex: 1; */
        /* text-align: center;*/
        justify-content: space-around; 
        margin:0 1rem ;
        left: 6rem;
        bottom: 0;
        color: #666;
        &.active::after
        {
            content: "";
            background-color: rgb(25, 25, 25,.3);
            width:1rem;
            height: 0.2rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
        &.active {
            color: #000;
        }
        
    }
}

 `