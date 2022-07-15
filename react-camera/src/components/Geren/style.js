import styled from 'styled-components'   

export const Wrapper = styled.div`
    .backg{
        width: 100%;
        height: 16rem;
        position: relative;
        background-image:linear-gradient(to right, #d3bef4,#e6bcf7,#f3bbf1,#f6bdf1,#ffb9ee,#ffbbef,#fdc4ec,#ffc6ec,#fccaea,#ffcdeb,#ffd3ea);  
        .close{
            position: absolute;
            color:#fff;
            font-size: 25px;
            font-weight:bold;
            top: 2rem;
            left: 0.5rem;
        }
        p{
            color: #fff;
            text-align: center;
            padding-top: 4rem;
        }
        .fu{

            width: 96%;
            height: 9.5rem;
            background-color:white;
            margin:1rem 0.5rem; 
            border-radius:2rem;
            img{
                position: absolute;
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 100%;
                top: 5rem;
                left: 2rem;
            }
            .name {
                position: absolute;
                color:#000;
                font-weight:bold;
                left: 3rem;
                top: 10rem;
            }
            .btn {
                position: absolute;
                display: inline-block;
                width: 3rem;
                height: 1.5rem;
                border-radius:1rem;
                background-color:#fe7ab4;
                right: 3rem;
                top: 10rem;

            }
            .star {
                position: absolute;
                color:grey;
                line-height: 1rem;
                top: 8rem;
                left: 2rem;
            }
            .star1{
                color:grey;
                position: absolute;
               left: 2rem;
            }
        }
    }
`

export const Tab = styled.ul`
     margin: 0.5rem 7rem;
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
`
export const Nodata = styled.div`
    img {
        width: 100%;
        height: 100%;
    }
`