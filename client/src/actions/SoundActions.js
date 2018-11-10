// fetch all sounds
// fetch individual sound
// post new sound

  export function fetchSounds(){
    return (dispatch) => {
      dispatch({ type: 'START_FETCHING_SOUNDS_REQUEST' })
      return fetch('/api/sounds')
      .then(resp => {
        if (resp.ok) {
          return resp.json()
        } else {
          alert('Something went wrong')
        }
        })
      .then(sounds => dispatch({ type: 'FETCH_SOUNDS', sounds: sounds }))
      .catch((error) => {
        console.log(error)
      })
    }
  }

  export function postSound(newSound){
    return (dispatch) => {
      dispatch({ type: 'START_POSTING_SOUND_REQUEST' })
      return fetch('/api/sounds', {
        method: 'POST',
        body: JSON.stringify({
          sound: {newSound}
        })
      })
      .then(resp => resp.json())
      .then(data => dispatch({ type: 'POST_SOUND', payload: data }))
    }
  }
