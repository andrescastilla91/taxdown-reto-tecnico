import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { erroLogin, setUserData, SET_LOGIN } from '../redux/actions/usersActions';

function* login(dataLogin){
  try {
    const url = `http://localhost:3005/users?username=${dataLogin.data.username}&password=${dataLogin.data.password}`;
    const response = yield call(axios.get, url);
    if(response.data.length > 0){
      yield put(setUserData(response.data));
      return;
    }
    yield put(erroLogin("Invalid Credentials"))
  } catch (error) {
    yield put(erroLogin(error.message))
  }
}

function* loginSaga(){
  yield takeEvery(SET_LOGIN, login)
}

export default loginSaga;