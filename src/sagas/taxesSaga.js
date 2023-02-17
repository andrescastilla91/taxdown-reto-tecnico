import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { erroTaxList, GET_TAX_LIST, setTaxList } from '../redux/actions/taxesActions';

function* getTaxListService(){
  try {
    const url = `http://localhost:3005/taxes`;
    const response = yield call(axios.get, url);
    if(response.data.length > 0){
      yield put(setTaxList(response.data));
      return;
    }
  } catch (error) {
    yield put(erroTaxList(error.message))
  }
}


function* taxesSaga(){
  yield takeEvery(GET_TAX_LIST, getTaxListService)
}

export default taxesSaga;