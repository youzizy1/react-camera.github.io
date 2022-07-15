import styled from 'styled-components'  

export const ListWrapper = styled.div`
    display: block;
    left: 0;
    column-count:2;
    margin-bottom:2.5rem;
   
`
export const List = styled.div`
    break-inside: avoid;
    flex-direction:column;
    /* display: inline-block  ; */
    /* width: 45%;
    height: 100%; */
    text-decoration:none;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: 0.25rem;
    position: relative;
    /* border-radius:10px; */
    .img_wrapper{
        break-inside: avoid;
        display: inline-block;
        left: 0;
        list-style-type:none ;
         img{
            width: 100%;
            /* height: 100%; */
            padding: 0.1rem;
            border-radius:0.5rem;
         }
         
    }
    .get {
            break-inside: avoid;
            position: absolute;
            background:rgba(20,20,20,.5);
            border-radius: 10px;
            color:#fff;
            height: 1.25rem;
            width: 4.25rem;
            bottom:2rem;
            right: 0.25rem;
         }
    .title{
        font-size: 14px;
        left: 0;
    }

`