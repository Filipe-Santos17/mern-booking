const authReducer = (state = {}, action) => {
    switch(action.types){
      case "LOGGED_IN_USER":
        return {...state, ...action.payload}
      case "LOGOUT":
        return action.payload
      default:
        return state
    }
}

export default authReducer