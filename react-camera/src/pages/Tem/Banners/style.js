import styled from 'styled-components'  

export const BannersWrapper = styled.div`
    height: 10.5rem;
    /* margin-top:1rem; */
.btn_banners{
    width:100%;
    height:50vw;
    background:#fff;
    
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
    
}
.swiper-item{
    display:flex;
    width: 100%;
    height: 40%;
    justify-content: space-around;
    
} 
.swiper-item div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:5vw;
    
}
.swiper-item div p{
    height:50vw;
    width:90vw;
    background: skyblue;
}
.swiper-item div img{
    height:100%;
    width:100%
}
.swiper-pagination{
    bottom: 0;
    
}
.swiper-pagination-bullet{
    border-radius: 0;
    height: 0.1rem;
}
`