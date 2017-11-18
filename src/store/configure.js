import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);