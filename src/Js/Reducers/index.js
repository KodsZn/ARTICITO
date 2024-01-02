import {combineReducers} from 'redux'
import userReducer from './Reducers'
import FamousReducer from './ReducersFamous'
import PieceReducer from './PieceReducer'
const rootReducer=combineReducers({userReducer,FamousReducer,PieceReducer})
export default rootReducer