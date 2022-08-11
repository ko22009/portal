import { takeEvery, call, put, fork } from "redux-saga/effects";
import { auth } from "../../../api";
import { AUTH_TYPE } from "../actions/authActions";
import { setAuthenticated, setError } from "../slices/authSlice";
import { Login } from "../../types/auth";
import { PayloadAction } from "@reduxjs/toolkit";

function* authHandler(action: PayloadAction<{ login: Login }>) {
  try {
    const authenticated: boolean = yield call(auth, action.payload.login);
    yield put(setAuthenticated(authenticated));
    yield put(setError(!authenticated));
  } catch (error) {
    console.error(error);
  }
}

function* watchAuthLogin() {
  yield takeEvery(AUTH_TYPE, authHandler);
}

const authSagas = [fork(watchAuthLogin)];

export default authSagas;
