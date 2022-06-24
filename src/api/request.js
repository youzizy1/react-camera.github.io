import axios from 'axios'

export const getBanners = () => 
    axios.get('https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers/banners')

export const getSpmb = () => 
    axios.get('https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers/spmb')
        // .then(res => {
        //     let result = res.data;
        //     if(tab){
        //         switch(tab){
        //           case"hot":
        //           result  = result .filter(item => item.type == "hot");
        //           break;
        //           case"spic":
        //           result  = result .filter(item => item.type == "spic");
        //           break;
        //           case"rhy":
        //           result  = result .filter(item => item.type == "rhy");
        //           break;
        //           default:
        //             break;
        //         }
        //       }
        //       return Promise.resolve({
        //         result
        //       })
        // })

export const getTpmb = (  ) =>
   axios.get('https://www.fastmock.site/mock/61dc0b0b924d225e00742e9519eb4e55/beers/tpmb')
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

    