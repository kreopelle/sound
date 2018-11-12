export default function manageLogin(state = {
  current_user: '', logged_in: false,
}, action) {
  switch(action.type){
    case 'LOGIN':
      console.log(action.payload )
      return {...state, logged_in: true }

    default:
      return state;
  }
}
