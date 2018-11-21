import { combineReducers } from 'redux'
import soundsReducer from './soundsReducer'

// export sounds reducer into a root reducer

const rootReducer = combineReducers({
  sounds: soundsReducer
})

export default rootReducer
