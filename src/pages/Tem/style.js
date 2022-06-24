import styled from 'styled-components'

export const Navbar = styled.div`
    top: 40px;
    margin: 0;
    .nav-links ul {
        list-style-type:none;
        overflow: auto;
        left: 0;
        display: flex;
    }
    .nav-links li {
        display: inline-block;
        /* zoom: 1; */
        flex-shrink: 0;
        margin: 0 auto 20px;     
    }
    .nav-links li a {
        text-decoration:none;
        /* display: inline-block; */
        /* display: block; */
        width: 120px;
        height: 50px;
        text-align: center;
        overflow: hidden;
        zoom: 1;
        line-height: 50em;
        /* outline: none; */
        /* vertical-align: middle; */
        display: block;
        background-size:cover;
        background-position:center;
        margin: 10px;
     
    }
    .lnk-xiutu {
     
        background:transparent url('http://localhost:3000/src/assets/images/t1.jpg' )
    }
     .lnk-pintu {
        background:transparent url('http://localhost:3000/src/assets/images/t2.jpg') 
    }
    .lnk-erciyuan {
        background:transparent url('http://localhost:3000/src/assets/images/t3.jpg') 
    }
    .lnk-tonghua {
        background:transparent url('http://localhost:3000/src/assets/images/t4.jpg') 
    }
`

export const Links = styled.div`
    ul {
        margin: 10px 120px;
        li { 
    display: inline-block;
    position: relative;
    a{
        font-size:24px; 
        color:grey;
        margin: 10px;
        text-decoration:none;
        text-align: center;
        &.active::before{
            content: " ";
            color:red;
            position: absolute;
            left:25px ;
            top: 0;
            width: 50%;
            height: 100%;
            justify-content: center;
            border-bottom: 2px solid silver;
        }
        &.active{
            color:#000;
        }
    }
       
    }
    }

   
   
`