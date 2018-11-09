export default function manageSounds(state = {
  sounds: [],
}, action) {
  switch(action.type){
    case 'ADD_SOUND':
      return { sounds: state.sounds.concat(action.payload) }

    case 'FETCH_SOUNDS':
      return { sounds: action.sounds }

    default:
      return state;
  }
}
