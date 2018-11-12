export default function soundsReducer(state = {
  sounds: [],
}, action) {
  switch(action.type){
    case 'ADD_SOUND':
      return { sounds: state.sounds.concat(action.payload) }

    case 'FETCH_SOUNDS':
      return { sounds: action.sounds }

    case 'POST_SOUND':
      return { sounds: [...state.sounds, action.payload] }

    default:
      return state;
  }
}
