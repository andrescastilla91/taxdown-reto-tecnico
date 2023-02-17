import { ERROR_SUBMISSIONS, GET_PERSON_TAXES, POST_PERSON_TAXES, SET_DEFAULT_SUBMISSION, SET_STORE_PERSON_TAXES, SUCCESS_SUBMISSIONS } from "../actions/submissionsPersonTaxesActions"
import { LOGOUT } from "../actions/usersActions";

const defaultState = ['empty']

const submissionsPersonTaxesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_STORE_PERSON_TAXES: {
      return [...action.data]
    }
    case ERROR_SUBMISSIONS: {
      return {
        error_message: action.message
      }
    }
    case SUCCESS_SUBMISSIONS: {
      return [action.message]
    }
    case GET_PERSON_TAXES: {
      return [...state]
    }
    case POST_PERSON_TAXES: {
      return [...state]
    }
    case LOGOUT: {
      state = defaultState;
      return state;
    }
    case SET_DEFAULT_SUBMISSION: {
      state = defaultState;
      return state;
    }
    default: {
      return [...state];
    }
  }
}

export default submissionsPersonTaxesReducer;