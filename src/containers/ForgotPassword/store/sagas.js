import { put, call, takeLatest } from 'redux-saga/effects';
import { actionCreators, actionTypes } from "./reducers";
import api from '../../../services/api';

function* forgotPassword({ payload: { email }}){
  yield put(actionCreators.isSubmitting(true));
  try {
    const response = yield call(api.forgot, email);
    console.log(response);
    yield put(actionCreators.success(response.message));
  } catch(e) {
    yield put(actionCreators.error(e.message));
    console.log(e);
  } finally {
    yield put(actionCreators.isSubmitting(false));
  }
}


export const sagas = [
  takeLatest(actionTypes.SUBMIT_FORGOT_PASSWORD, forgotPassword)
];