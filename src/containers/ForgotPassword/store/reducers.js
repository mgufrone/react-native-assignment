import { createReducer } from 'redux-reducers';
const initialState = {
  email: '',
  isSubmitting: false,
  error: null,
  success: null
};

import {
  IS_SUBMITTING,
  SUBMIT_FORGOT_PASSWORD,
  SUCCESS,
  ERROR, SET_EMAIl
} from './constants';


const isSubmitting = (state, isSubmitting) => ({
  ...state,
  isSubmitting,
});

const error = (state, error) => ({
  ...state,
  success: null,
  error,
});

const success = (state, success) => ({
  ...state,
  error: null,
  success,
});

const setEmail = (state, email) => ({
  ...state,
  email,
});


const actions = {
  [IS_SUBMITTING]: isSubmitting,
  [SUCCESS]: success,
  [ERROR]: error,
  [SET_EMAIl]: setEmail,
  [SUBMIT_FORGOT_PASSWORD]: null,
}


export const {
  actionTypes,
  actionCreators,
  reducer
} = createReducer('forgot', initialState, actions);