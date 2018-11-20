export default function loginReducer(state = {
  current_user: '', logged_in: false,
}, action) {
  switch(action.type){
    case 'LOGIN':
      return { logged_in: true, current_user: action.email }

    case 'LOGOUT':
      return { logged_in: false, current_user: '' }

    default:
      return state;
  }
}
