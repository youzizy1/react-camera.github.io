import styled  from "styled-components";

export const SearchWrapper = styled.div`

`

export const Tab = styled.div`
    position: relative;
    top: 30px;
    background-size:contain;
    form {
        margin: 0;
        padding: 0;
        border:0;
    }
    input{
        margin-left:3px;
        vertical-align:middle ;
    }
    form .bn {
        border: none;
        position: absolute;
        left: 5px;
        top: 0;
        width: 30px;
        height: 40px;
        overflow: hidden;
        cursor:pointer;
        background: url(https://img3.doubanio.com/f/sns/f71f15922ebd7c0ff0ea0e7a25577529efd8981a/pics/icon/bn_srh_1.png) 50% 50% no-repeat;
    }
    form .bn input{
        border: none;
        background:transparent;
        overflow: hidden;
        height: 40px;
        width: 30px;
        font-size:0;
        color: transparent;
        cursor:pointer;
        

    }
    form .inp {
        display:inline-block;
        height:40px;       
        overflow: hidden;  
        left: 0;  
        right: 0;   
    }
    form .inp input{
        position: absolute;
        left: 0;
        width: 300px;
        height: 30px;
        border-radius:50px;
        font-size: 13px;
        padding-left:30px;
        background: transparent;
        float: right;
    }
    .im {
        position: absolute;
        display: block;
        width: 40px;
        height: 40px;
        line-height:40px;
       right: 20px;
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
    margin: 20px;
   h4 { 
    margin-top: 50px;
   }
   p{
    line-height: 35px;
    position: relative;
    span {
        position: absolute;
        right: 10px;
    }
   }
   a {
    color: #000;
    text-decoration:none;
    
   }
`