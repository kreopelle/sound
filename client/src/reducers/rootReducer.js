// combine reducers into a single root reducer
import { combineReducers } from 'redux'
import { loginReducer } from './loginReducer'
import { soundsReducer } from './soundsReducer'

export const rootReducer = combineReducers({
  login: loginReducer,
  sounds: soundsReducer
})
