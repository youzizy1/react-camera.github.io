import styled from 'styled-components'  

export const ListWrapper = styled.div`
    display: block;
    left: 0;
    margin-bottom:50px;
   
`
export const List = styled.li`
    display: inline-block  ;
    width: 45%;
    height: 100%;
    text-decoration:none;
    box-sizing: border-box;
    left: 0;
    right: 0;margin: 5px;
    position: relative;
    /* border-radius:10px; */
    a{
        display: inline-block;
        width: 100%;
        height: 100%;
        left: 0;
        list-style-type:none ;
         img{
            width: 100%;
            height: 100%;
            padding: 2px;
            border-radius:10px;
         }
    }
    .get {
            position: absolute;
            background:rgba(20,20,20,.3);
            border-radius: 10px;
            color:#fff;
            height: 25px;
            width: 85px;
            z-index: 10;
            bottom: 35px;
            right: 5px;
         }

`