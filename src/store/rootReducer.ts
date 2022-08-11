import { combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import news from "./slices/newsSlice";

const rootReducer = combineReducers({
  auth,
  news,
});

export default rootReducer;
