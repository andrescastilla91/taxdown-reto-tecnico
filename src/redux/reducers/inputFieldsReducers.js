import { ERROR_IMPUT_FIELD, SET_INPUT_FIELD } from "../actions/inputFieldsActions"
import { LOGOUT } from "../actions/usersActions"

const defaultState = {
  id: "",
  label: "",
  placeholder: "",
  type: "",
  maxLength: 0
}

const inputFieldsReducer = (state = [defaultState], action) => {
  switch(action.type){
    case SET_INPUT_FIELD: {
      return [...action.data]
    }
    case ERROR_IMPUT_FIELD: {
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

export default inputFieldsReducer;