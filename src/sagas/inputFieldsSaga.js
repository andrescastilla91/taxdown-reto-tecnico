import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { erroInputFields, GET_INPUT_FIELD, setInputFields } from '../redux/actions/inputFieldsActions';

function* getInputFieldsService(data){
  try {
    const url = `http://localhost:3005/inputFields`;
    const response = yield call(axios.get, url);
    if(response.data.length > 0){
      yield put(setInputFields(response.data));
      return;
    }
  } catch (error) {
    yield put(erroInputFields(error.message))
  }
}

function* inputFieldsSaga(){
  yield takeEvery(GET_INPUT_FIELD, getInputFieldsService);
}

export default inputFieldsSaga;