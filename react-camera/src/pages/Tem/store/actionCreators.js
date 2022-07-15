import {
    getBanners,
    getSpmb,
    getTpmb,
    getAlbums
} from '@/api/request'   
import * as actionTypes from './constants'

export const changeBannerList = (data) =>({
    type:actionTypes.CHANGE_BANNER,
    data
})

export const getBannerList = () =>{
    return (dispatch) => {
        getBanners()
        // console.log(data)
            .then(data => {
                const action = changeBannerList(data)
                dispatch(action)
                dispatch(changeEnterLoading(false))
        })
    }
}
export const changeSpmbListStar = (data) =>({
    type:actionTypes.CHANGE_SPMB_STAR,
    data
})
export const changeTpmbListStar = (data) =>({
    type:actionTypes.CHANGE_TPMB_STAR,
    data
})
export const changeTpmbListById = (data) => ({
    type:actionTypes.CHANGE_TPMBLIST_ID,
    data
})

export const changeTpmbList = (data) =>({
    type:actionTypes.CHANGE_TPMB_LIST,
    data
})

export const changeEnterLoading = (data) =>({
    type:actionTypes.CHANGE_ENTERLOADING,
    data
})
export const getTpmbList = () =>{
    return (dispatch) => {
        getTpmb()
        // console.log(data)
            .then(data => {
                const action = changeTpmbList(data)
                dispatch(action)
        })
    }
} 

export const changeSpmbList = (data) =>({
    type:actionTypes.CHANGE_SPMB_LIST,
    data
})

export const getSpmbList = () =>{
    return (dispatch) => {
        getSpmb()
        // console.log(data)
            .then(data => {
                dispatch(changeEnterLoading(true))
                const action = changeSpmbList(data)
                dispatch(action)
                dispatch(changeEnterLoading(false))
        })
    }
}

export const changeAlbumList = (data) =>({
    type:actionTypes.CHANGE_ALBUM,
    data
})

export const  getAlbumList = () =>{
    return (dispatch) =>{
        getAlbums()   
            .then(data => {
                dispatch(changeAlbumList(data.data))
            })
    }
}
