import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers/rootReducers';
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../sagas/rootSaga';



const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  middleware: ()=> [sagaMiddleware]
});

sagaMiddleware.run(rootSagas)

export default store;

