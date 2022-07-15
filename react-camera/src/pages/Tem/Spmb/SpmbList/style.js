import styled from 'styled-components'  

export const ListWrapper = styled.div`
    display: block;
    left: 0;
    margin-bottom:2.5rem;
    column-count:2;
   
`
export const List = styled.div`
    break-inside: avoid;
    /* display: inline-block  ;
    width: 45%;
    height: 100%; */
    text-decoration:none;
    box-sizing: border-box;
    left: 0;
    right: 0;margin: 0.25rem;
    position: relative;
    /* border-radius:10px; */
    .img_wrapper{
        break-inside: avoid;
        display: inline-block;
        /* width: 100%;
        height: 100%; */
        left: 0;
        list-style-type:none ;
         video{
            width: 100%;
            height: 100%;
            padding: 0.1rem;
            border-radius:0.5rem;
         }
    }
    .get {
            position: absolute;
            background:rgba(20,20,20,.3);
            border-radius: 0.5rem;
            color:#fff;
            height:1.25rem;
            width: 4.25rem;
            bottom: 3.5rem;
            right: 0.25rem;
         }
         .xiao{
            font-size: 13px;
         }

`