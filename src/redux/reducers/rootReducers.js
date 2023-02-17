import { combineReducers } from "redux";
import usersReducer from "./usersReducers";
import taxesReducer from "./taxesReducers";
import inputFieldsReducer from "./inputFieldsReducers";
import submissionsPersonTaxesReducer from "./submissionsPersonTaxesReducers";

const rootReducers = combineReducers({
  usersReducer,
  taxesReducer,
  inputFieldsReducer,
  submissionsPersonTaxesReducer
});

export default rootReducers;