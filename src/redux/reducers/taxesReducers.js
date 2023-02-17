import { ERROR_TAX_LIST, GET_TAX_LIST, SET_TAX_LIST } from "../actions/taxesActions"
import { LOGOUT } from "../actions/usersActions";

const defaultState = {
  id:  "",
  name:  "",
  year: ""
}

const taxesReducer = (state = [defaultState], action) => {
  switch(action.type){
    case SET_TAX_LIST: {
      return [...action.data];
    }
    case GET_TAX_LIST: {
      return [...state];
    }
    case ERROR_TAX_LIST: {
      return {
        error_message: action.message
      }
    }
    case LOGOUT: {
      state = [defaultState];
      return state;
    }
    default: return [...state]
  }
}

export default taxesReducer;