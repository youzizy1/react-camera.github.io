import * as actionTypes from './constants' 

const defaultState = {
    TpmbStar:[],
    SpmbStar:[]
}  
const reducer = (state = defaultState,action) =>{
    switch(action.type){
        case actionTypes.CHANGE_TP_STAR:
            return {
                ...state,
                TpmbStar:action.data
            }
        case actionTypes.CHANGE_SP_STAR:
            return {
                ...state,
                SpmbStar:action.data
            }
        default:
            return state
    }

}

export default  reducer