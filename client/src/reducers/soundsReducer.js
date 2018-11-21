export default function soundsReducer(state = [], action) {
  switch(action.type){
    case 'FETCH_SOUNDS':
      return action.sounds

    case 'POST_SOUND':
      return [...state, action.sound]

    case 'DELETE_SOUND':
      return state.filter(sound => sound.id !== action.soundId)

    case 'FAVORITE_SOUND':
      const index = state.findIndex(sound => sound.id === action.soundId)
      const sound = state[index]

      return [
        ...state.slice(0, index), Object.assign({}, sound, {votes: sound.votes + 1}), ...state.slice(index + 1)
      ]

    default:
      return state;
  }
}
