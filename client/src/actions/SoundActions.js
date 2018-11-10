// fetch all sounds
// fetch individual sound
// post new sound

  export function fetchSounds(){
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_SOUNDS_REQUEST' })
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

  export function postSound(sound){
    return (dispatch) => {
      dispatch({ type: 'START_POST_SOUND_REQUEST' })
      return fetch('/api/sounds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sound: {
            title: sound.title,
            description: sound.description
          }
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch({ type: 'POST_SOUND', payload: data }))
    }
  }
