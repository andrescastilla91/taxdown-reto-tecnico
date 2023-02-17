import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { errorSubmissions, GET_PERSON_TAXES, POST_PERSON_TAXES, setStoreSubmissionsPersonTax, successSubmissions } from "../redux/actions/submissionsPersonTaxesActions";

function* postSubmissions(data){
  try {
    const url = `http://localhost:3005/taxes/${data.taxeId}/form`;
    const response = yield call(axios.post, url, data);
    if(response.status === 201){
      yield put(successSubmissions("Record added successfully"));
      return;
    }
  } catch (error) {
    yield put(errorSubmissions(error.message))
  }
}

function* getSubmissions(data){
  try {
    const url = `http://localhost:3005/taxes/${data.taxeId}/form`;
    const response = yield call(axios.get, url);
    if(response.data.length > 0){
      yield put(setStoreSubmissionsPersonTax(response.data));
      return;
    }
  } catch (error) {
    yield put(errorSubmissions(error.message))
  }
}

function* submissionsPersonTaxesSaga(){
  yield takeEvery(POST_PERSON_TAXES, postSubmissions);
  yield takeEvery(GET_PERSON_TAXES, getSubmissions);
}

export default submissionsPersonTaxesSaga;