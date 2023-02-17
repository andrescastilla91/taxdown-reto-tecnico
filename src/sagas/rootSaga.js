import { all } from 'redux-saga/effects';
import loginSaga from './usersSaga';
import taxesSaga from './taxesSaga';
import inputFieldsSaga from './inputFieldsSaga';
import submissionsPersonTaxesSaga from './submissionsPersonTaxesSaga';


export default function* rootSagas(){
  yield all([
    loginSaga(),
    taxesSaga(),
    inputFieldsSaga(),
    submissionsPersonTaxesSaga()
  ])
}