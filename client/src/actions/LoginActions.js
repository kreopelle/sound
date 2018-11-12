// login fetch request
// logout fetch request? to delete the session?
// signup fetch request?

export function login(auth){
  return (dispatch) => {
    dispatch({ type: 'START_LOGIN_REQUEST'})
    return fetch('http://localhost:3000/api/user_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(auth)
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem('jwt', data.jwt)
      dispatch({ type: 'LOGIN', payload: data })
    })
  }
}
