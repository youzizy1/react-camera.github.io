import styled from 'styled-components' 

export const Wrapper = styled.div`
    video {
        margin: 1.5rem;
        width: 20rem;
        height: 30rem;
    }
  
    .caozuo{
        width: 100%;
        height: 10rem;
        display: flex;
        .star{
            display: inline-block;
            width: 3rem;
            height: 3rem;
            background-color:#fef1f6;
            border-radius:100%;
            margin-left: 2rem;
            position: relative;
            outline: hidden;
            .star_a{
                width: 3rem;
                height: 3rem;
                position: absolute;
                text-align: center;
                font-size: 35px;
                color:silver;
                left: 0.8rem;
                top: 0.5rem;
                outline: hidden;
            }
        }
        .zi{
            display: inline-block;
            width: 13rem;
            height: 3rem;
            text-align: center;
            font-weight:bold;
            border-radius:3rem;
            line-height: 3rem;
            background-color:#fef1f6;
            color:#ea84ae;  
            margin-left: 2.5rem;
        }
    }
   

    
`

export const NavBar = styled.div`
        text-align: center;
        height: 5rem;
        line-height: 5rem;
        position: relative;
        .close{
            position: absolute;
            font-size: 25px;
            color:grey;
            display: inline-block;
            left: 1rem;
            top: 1.5rem;
        }
        .share{
            position: absolute;
            font-size: 25px;
            color:grey;
            display: inline-block;
            right: 1rem;
            top: 1.5rem;
            
        }
`
export const List = styled.div`
    .dw {
        position: relative;
        .t {
            position: absolute;
            top: 24rem;
            left: 5rem;
        }
        .sc {
        position: absolute;
        right: 4rem;
        top: 26rem; 
        width: 5rem;
        text-align: center;
        color: #fff;
        border-radius: 3rem;
        background-color: rgb(22,22,22,.3);  
        }
   .title {
        position: absolute;
        left: 3rem;
        top: 26rem; 
        /* width: 5rem; */
        font-weight:bold;
        text-align: center;
        /* color: #fff; */
        border-radius: 3rem;
        /* background-color: rgb(22,22,22,.3); */

    }}
`