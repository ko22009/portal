import { RequestNews } from "../../types/news";

export const NEWS_TYPE = "news";

export const getNewsAction = (request: RequestNews) => ({
  type: NEWS_TYPE,
  payload: {
    request,
  },
});
