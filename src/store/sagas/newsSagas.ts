import { takeEvery, call, put, fork } from "redux-saga/effects";
import { getNews } from "../../../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { NEWS_TYPE } from "../actions/newsActions";
import { News, RequestNews } from "../../types/news";
import { setNews } from "../slices/newsSlice";

function* fetchNews(action: PayloadAction<{ request: RequestNews }>) {
  try {
    const news: News = yield call(getNews, action.payload.request);
    yield put(setNews(news));
  } catch (error) {
    console.error(error);
  }
}

function* watchFetchNews() {
  yield takeEvery(NEWS_TYPE, fetchNews);
}

const newsSagas = [fork(watchFetchNews)];

export default newsSagas;
