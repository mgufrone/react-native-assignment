import { all } from 'redux-saga/effects';
import { sagas as forgot } from '../containers/ForgotPassword';

export default function*() {
  yield all([
    ...forgot,
  ]);
}
