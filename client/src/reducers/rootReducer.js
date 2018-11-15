import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import soundsReducer from './soundsReducer'

// combine separate login and sounds reducers into a single root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  sounds: soundsReducer
})

export default rootReducer
