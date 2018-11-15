export default function soundsReducer(state = [], action) {
  switch(action.type){
    case 'FETCH_SOUNDS':
      return state.concat(action.sounds)

    case 'POST_SOUND':
      return [...state, action.sound]

    default:
      return state;
  }
}
