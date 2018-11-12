export default function soundsReducer(state = [], action) {
  switch(action.type){
    case 'ADD_SOUND':
      return state.concat(action.payload)

    case 'FETCH_SOUNDS':
      return state.concat(action.sounds)

    case 'POST_SOUND':
      return [...state, action.payload]

    default:
      return state;
  }
}
