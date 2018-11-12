export default function soundsReducer(state = [], action) {
  switch(action.type){
    case 'FETCH_SOUNDS':
      // why doesn't the syntax for post sound also work when fetching sounds? 
      return state.concat(action.sounds)

    case 'POST_SOUND':
      return [...state, action.sound]

    default:
      return state;
  }
}
