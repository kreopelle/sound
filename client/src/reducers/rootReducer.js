import { combineReducers } from 'redux'
import soundsReducer from './soundsReducer'

// create a single root reducer

const rootReducer = combineReducers({
  sounds: soundsReducer
})

export default rootReducer
