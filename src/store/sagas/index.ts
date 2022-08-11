import { all } from "redux-saga/effects";
import authSagas from "./authSagas";
import newsSagas from "./newsSagas";

export default function* rootSaga() {
  yield all([...authSagas, ...newsSagas]);
}
