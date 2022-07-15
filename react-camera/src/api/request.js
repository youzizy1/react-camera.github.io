import { axiosInstance } from './config'  
import axios from 'axios' 

export const getBanners = () => 
    axiosInstance.get('/banners')

export const getSpmb = () => 
    axiosInstance.get('/spmb')

export const getTpmb = () =>
    axiosInstance.get('/tpmb')
  //  .then(res => {
  //   let result = res.data;
  //   console.log(result)
  //   if(tab1){
  //       switch(tab1){
  //         case"hot":
  //         result = result.filter(item => item.type == "hot");
  //         break;
  //         case"new":
  //         result = result.filter(item => item.type == "new");
  //         break;
  //         case"summy":
  //         result = result.filter(item => item.type == "summy");
  //         break;
  //         default:
  //           break;
  //       }
  //     }
  //     return Promise.resolve({
  //       result
  //     })
  //   } )

  export const getLogin = () =>
   axios.get('https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers/login')

   export const getAlbums = () => 
       axios.get('https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers/albumList')