import { ERROR_LOGIN, GET_USER_DATA, LOGOUT, SET_USER_DATA } from "../actions/usersActions";
import { sha1 } from 'object-hash'

const defaultState = {
  id:  "",
  name:  "",
  username: "",
  token: ""
}

const usersReducer = (state = defaultState, action) => {
  switch(action.type){
    case GET_USER_DATA: {
      return {...state}
    }
    case SET_USER_DATA:{
      return {
        id: action.user[0].id,
        name: action.user[0].name,
        username: action.user[0].username,
        token: sha1(action.user[0])
      }
    }
    case ERROR_LOGIN: {
      return {
        error_message: action.message
      }
    }
    case LOGOUT: {
      state = defaultState;
      return state;
    }
    default: return state
  }
}

export default usersReducer;