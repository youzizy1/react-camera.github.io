import * as actionTypes from './constants' 
import * as Types from '@/components/Geren/store/constants'  
import { changeTpmbListById, changeTpmbListStar } from './actionCreators'

const defaultState = {
    bannerList:[],
    tpmbList:[
        {
            "id":5,
            "type":"new",
            "title":"超燃单张卡点",
            "img":"https://ts1.cn.mm.bing.net/th/id/R-C.8cf9b00a13fde6fe0dd24681409b8041?rik=B%2fIQSibfFt9g%2fQ&riu=http%3a%2f%2fpic.22520.cn%2ftuku%2f200208%2f1581095290331662.jpg&ehk=4kQ8PSj78Oh3cAk9FWM1%2f9N0DTKw8f2GGa441y89JmU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          },
          {
            "id":6,
            "type":"new",
            "title":"清空卡点",
            "img":"https://ts1.cn.mm.bing.net/th/id/R-C.7620de27ee028d5dcb39a88159cbf315?rik=5YICN2bLd66UKw&riu=http%3a%2f%2fimg.crcz.com%2fallimg%2f202001%2f07%2f1578387974140589.jpg&ehk=%2fOTVWaycQYGi%2bifdrOEnHw44GX%2bDAHTFED%2fTayx7Jfo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          },
          {
            "id":11,
          "type":"new",
          "title":"ins风景美食plog",
          "img":"https://tse4-mm.cn.bing.net/th/id/OIP-C.wF_dEeN5wshhDt_NZNdv8gHaN3?pid=ImgDet&rs=1"
        }
    ],
    spmbList:[
      {
        "id":1,
        "type":"hot",
        "title":"毕业回忆",
        "videos":"http://localhost:3000/src/assets/videos/biye.mp4",
        "desc":"12张效果最佳，最少5张"
        
      },
      {
        "id":2,
        "type":"hot",
        "title":"夏日憧憬",
        "videos":"http://localhost:3000/src/assets/videos/xr1.mp4",
        "desc":"7张效果最佳，最少4张"
      },
      {
        "id":3,
        "type":"hot",
        "title":"出去玩",
        "videos":"http://localhost:3000/src/assets/videos/chuqu.mp4",
        "desc":"10张效果最佳，最少5张"
      },
      {
        "id":4,
        "type":"hot",
        "title":"mood",
        "videos":"http://localhost:3000/src/assets/videos/mood.mp4",
        "desc":"11张效果最佳，最少4张"
      },
      {
        "id":14,
        "type":"hot",
        "title":"走过夕阳日落~",
        "videos":"http://localhost:3000/src/assets/videos/xiyang.mp4",
        "desc":"8张效果最佳，最少4张"
      }
    ],
    albumList:[],
    enterLoading:true
}    

const changeTpmbById = (list,id) =>{
  console.log(list)
  console.log(id)
  let index = list.findIndex(data => id == data.id);
  list[index].attention = !list[index].attention;
  return list;
}

const changeTpmbStar =(list,id) => {
  let ind = list.findIndex(data => id == data.id);
  list[ind].star1 = !list[ind].star1;
  return list
}

const changeSpmbStar =(list,id) => {
  let ind = list.findIndex(data => id == data.id);
  list[ind].star2 = !list[ind].star2;
  return list
}

const reducer= (state = defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGE_BANNER:
            return  {
                ...state,
                bannerList:action.data
            }
        case actionTypes.CHANGE_TPMB_LIST:
            return  {
                ...state,
                tpmbList:action.data
                }
        case actionTypes.CHANGE_SPMB_LIST:
            return  {
                 ...state,
                spmbList:action.data
                    }
        case actionTypes.CHANGE_ENTERLOADING:
             return {
                  ...state,
                  enterLoading:action.data
                    }
        case actionTypes.CHANGE_ALBUM:
              return {
               ...state,
                albumList:action.data
               }
        case actionTypes.CHANGE_TPMBLIST_ID:
          // console.log(action.data)  通过id改变attention状态  
               return {
                ...state,
                tpmbList:changeTpmbById(Object.assign([],state.tpmbList),action.data)
               }
        case actionTypes.CHANGE_TPMB_STAR:
               return {
                ...state,
                tpmbList:changeTpmbStar(Object.assign([],state.tpmbList),action.data)
               }
       case actionTypes.CHANGE_SPMB_STAR:
                return {
                ...state,
                 spmbList:changeSpmbStar(Object.assign([],state.spmbList),action.data)
                }
            default:
                return state
    }
    
}

export default reducer