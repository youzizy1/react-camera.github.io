import styled  from "styled-components";

export const SearchWrapper = styled.div`

`

export const Tab = styled.div`
    position: relative;
    top:0.7rem;
    background-size:contain;
    form {
        margin: 0;
        padding: 0;
        bottom: 0;
        border:0;
    }
    input{
        margin-left:0.15rem;
        vertical-align:middle ;
    }
    form .bn {
        border: none;
        position: absolute;
        left: 0.25rem;
        top: 0;
        width: 1.5rem;
        height: 2rem;
        overflow: hidden;
        cursor:pointer;
        background: url(https://img3.doubanio.com/f/sns/f71f15922ebd7c0ff0ea0e7a25577529efd8981a/pics/icon/bn_srh_1.png) 50% 50% no-repeat;
    }
    form .bn input{
        border: none;
        background:transparent;
        overflow: hidden;
        height: 2rem;
        width: 3.5rem;
        font-size:0;
        color: transparent;
        cursor:pointer;
        

    }
    form .inp {
        display:inline-block;
        
        height: 2.5rem;       
        overflow: hidden;  
        left: 0;  
        right: 0;   
    }
    form .inp input{
        position: absolute;
        left: 0;
        width: 18.5rem;
        height:2rem;
        border-radius:2.5rem;
        font-size: 0.65rem;
        padding-left:1.5rem;
        background: transparent;
        float: right;
    }

    .im {
        position: absolute;
        display: block;
        width: 2.5rem;
        height: 2.5rem;
       right: 0;
        top: 0;
       border-radius:1.5rem;
       img {
            width: 100%;
            height: 100%;
            border-radius:1.5rem;
            
        }
    }
    .content {
        /* display: flex; */
        justify-content: center; 
         align-items: center;
        width:12rem;
        height: 6rem;
        text-align: center;
        padding-top: 1rem;
        /* line-height: 6rem; */
        background-color:#fff;
        border-radius: 0.5rem;
        margin-top: 17rem;
        margin-left:6rem;
        
    }
    .btns {
        margin-top: 0.5rem;
        padding: 0.4rem;
        display: flex;
        border-top:0.01rem solid silver;
        span {
            
            flex: 1;
            &.active{
                color:red
            }    
        }
        .login {
            font-weight:bold;
                color:pink;
            }
    }
`