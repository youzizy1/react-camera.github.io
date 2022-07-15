import styled  from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;   
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index:100;
    overflow: hidden;
    background: #f2f3f4;
    transform-origin:right bottom;  
    &.fly-enter,&.fly-appear {
        opacity:0;
        transform:translate3d(100%,0,0) ;
    }
    &.fly-enter-active,&.fly-apply-active {
        opacity:1;
        transition:all .3s; 
        transform: translate3d(0,0,0);
    }
    &.fly-exit {
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    &.fly-exit-active {
            opacity: 0;
            transition: all .3s;
            transform: translate3d(100%,0,0);
        }
`

export const Tab = styled.div`
    position: relative;
    top: 2rem;
    background-size:contain;
    form {
        margin: 0;
        padding: 0;
        border:0;
    }
    input{
        margin-left:0.1875rem;
        vertical-align:middle ;
    }
    form .bn {
        border: none;
        position: absolute;
        left: 0.3125rem;
        top: 0;
        width: 2rem;
        height: 2.5rem;
        overflow: hidden;
        cursor:pointer;
        background: url(https://img3.doubanio.com/f/sns/f71f15922ebd7c0ff0ea0e7a25577529efd8981a/pics/icon/bn_srh_1.png) 50% 50% no-repeat;
    }
    form .bn input{
        border: none;
        background:transparent;
        overflow: hidden;
        height: 2.5rem;
        width: 1.875rem;
        font-size:0;
        color: transparent;
        cursor:pointer;
        

    }
    form .inp {
        display:inline-block;
        height:2.5rem;       
        overflow: hidden;  
        left: 0;  
        right: 0;   
    }
    form .inp input{
        position: absolute;
        left: 0;
        width: 18rem;
        height: 1.875rem;
        border-radius:3.125rem;
        font-size: 13px;
        padding-left:1.875rem;
        background: transparent;
        float: right;
    }
    .im {
        position: absolute;
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        line-height:2.5rem;
       right:0.6rem;
        top: 0;
        float: right;
       border-radius:30px;
        background-position:center;
        /* background:transparent url(http://localhost:3000/src/assets/images/t.jpg); */
        /* background-size:contain; */
    }
    a{
        color:#000;
    }
`

export const Wrapper = styled.div`
    color: #000;
    margin:1.25rem;
   h4 { 
    margin-top: 3.125rem;
   }
   p{
    line-height: 2.2rem;
    position: relative;
    span {
        position: absolute;
        right: 0.625rem;
    }
   }
   a {
    color: #000;
    text-decoration:none;
    
   }
`