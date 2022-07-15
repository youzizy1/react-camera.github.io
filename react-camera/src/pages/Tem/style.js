import styled from 'styled-components'

export const Ht = styled.div`
    /* height: 20rem; */
    .back_top{
    width:50px;
    height: 50px;
    background: rgba(19, 18, 18,0.3);
    color: aliceblue;
    position: fixed;
    bottom: 60px;
    right: 10px;
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    font-size: 26px
   
}
`
export const Navbar = styled.div`
    top: 2rem;
    margin: 0;
    .nav-links ul {
        list-style-type:none;
        overflow: auto;
        left: 0;
        display: flex;
        margin-top: 3rem;
    }
    .nav-links li {
        display: inline-block;
        /* zoom: 1; */
        flex-shrink: 0;
        margin: 0 auto 1rem;     
    }
    .nav-links li a {
        text-decoration:none;
        /* display: inline-block; */
        /* display: block; */
        width: 7rem;
        height: 3.5rem;
        text-align: center;
        overflow: hidden;
        zoom: 1;
        /* line-height: 50em; */
        /* outline: none; */
        /* vertical-align: middle; */
        display: block;
        background-size:cover;
        background-position:center;
        margin: 0.5rem;
     
    }
    .lnk-xiutu {
        img {
            width: 100%;
            height: 100%;
        }
        /* background:transparent url('http://localhost:3000/src/assets/images/t1.jpg' ) */
    }
     .lnk-pintu {
        img {
            width: 100%;
            height: 100%;
        }
        /* background:transparent url('http://localhost:3000/src/assets/images/t2.jpg')  */
    }
    .lnk-erciyuan {
        img {
            width: 100%;
            height: 100%;
        }
        /* background:transparent url('http://localhost:3000/src/assets/images/t3.jpg')  */
    }
    .lnk-tonghua {
        img {
            width: 100%;
            height: 100%;
        }
        /* background:transparent url('http://localhost:3000/src/assets/images/t4.jpg')  */
    }
    .lnk-shop {
        img {
            width: 100%;
            height: 100%;
        }
        }
`

export const Links = styled.div`
    ul {
        margin: 0.5rem 8rem;
        display: flex;
        width:16rem;
        height: 1.5rem;
        line-height: 1.5rem;
        li { 
        display: inline-block;
        position: relative;

    a{
        font-size:1.2rem; 
        color:grey;
        margin: 0.5rem;
        text-decoration:none;
        text-align: center;
        &.active::before{
            content: " ";
            color:red;
            position: absolute;
            left:1.25rem ;
            top: 0;
            width:50% ;
            height: 100%;
            justify-content: center;
            border-bottom: 0.1rem solid silver;
        }
        &.active{
            color:#000;
        }
        span {
            width: 100%;
            line-height: 1.5rem;
        }
    }
       
    }
    }  
`
export const Loading = styled.div`
 position: absolute;
    height: 100px;
    top:50%;
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 100px;
    >div{
      display: inline-block;
      background-color:red;
      height: 100%;
      width: 1px;
      margin-right:2px;
      animation:  1s infinite;
    }
    >div:nth-child(2) {
      animation-delay: -0.4s;
    }
    >div:nth-child(3) {
      animation-delay: -0.6s;
    }
    >div:nth-child(4) {
      animation-delay: -0.5s;
    }
    >div:nth-child(5) {
      animation-delay: -0.2s;
    } 

`
export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin:auto;
`