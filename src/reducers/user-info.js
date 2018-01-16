export const userInfo = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        userInfo: {
          userName: state.userName,
          isLoggined: true
        }
      })
    case 'LOGOUT':
      return Object.assign({}, state, {
        userInfo: {
          userName: null,
          isLoggined: false
        }
      })
    default:
      return state
  }
}