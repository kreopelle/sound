export default function manageSounds(state = {
  sounds: [],
}, action) {
  switch(action.type){
    case 'ADD_SOUND':
      return { sounds: state.sounds.concat(action.payload) }

    default:
      return state;
  }
}
