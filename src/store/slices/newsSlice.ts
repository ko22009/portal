import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { News } from "../../types/news";

const initialState: News = {
  data: [],
  count: 0,
  page: 0,
  lastPage: 0,
};

export const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<News>) {
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.page = action.payload.page;
      state.lastPage = action.payload.lastPage;
    },
  },
});

export const { setNews } = newsSlice.actions;
export const getNews = (state: RootState) => state.news;

export default newsSlice.reducer;
