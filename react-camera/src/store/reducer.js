import { combineReducers } from 'redux'   
import { reducer as TemReducer} from '@/pages/Tem/store/index'
import { reducer as GerenReducer } from '@/components/Geren/store/index'

export default combineReducers({
    Tem:TemReducer,
    Geren:GerenReducer
})