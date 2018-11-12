export default function loginReducer(state = {
  current_user: '', logged_in: false,
}, action) {
  switch(action.type){
    case 'LOGIN':
      return { logged_in: true, current_user: action.email }

    default:
      return state;
  }
}
