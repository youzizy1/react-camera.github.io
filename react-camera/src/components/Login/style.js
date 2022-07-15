import styled from 'styled-components'  

export const Wrapper = styled.div`
    background-image:url('../../src/assets/images/yt.jpg');
    background-size:cover;
    height: 100vh;
    .back {
        padding-top: 3rem;
          a{
            
            margin-left:1.5rem;
            color:grey;
            font-size:40px;
        }
    }
    .title{
        margin-top: 15rem;
        text-align: center;
        .title_img{
            display: inline-block;
            width: 3rem;
            height: 3rem;
            background-size:contain;
           background-image:url('../../src/assets/images/logo.jpg')
        }
        .title_ys{    
            font-size: 25px;
            color: pink;
            font-weight: bold;
        }
       
    }
    .des {
        text-align: center;
        font-size:14px;
        color: grey;
    }
    .button {
        text-align: center;
        line-height: 2.5rem;
        color: #fff;
        width: 10rem;
        height: 2.5rem;
        background-color:#fe7ab4;
        border-radius:2rem;
        margin: 4rem 6.5rem;
        a{
            color:#fff;
        }
    }
    .proto{
        text-align: center;
        font-size: 14px;
        color:grey;
        p{
            font-size: 14px;
        }
    }
    
`