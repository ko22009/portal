import { Login } from "../src/types/auth";
import news from "./news.json";
import { News, RequestNews } from "../src/types/news";

export function auth(login: Login) {
  return new Promise<boolean>((res) => {
    if (
      login?.username.toLowerCase() === "test" &&
      login?.password === "123456789"
    ) {
      res(true);
    } else {
      res(false);
    }
  });
}

export function getNews(request: RequestNews) {
  const start = (request.page - 1) * request.count;
  const result = news.slice(start, start + request.count);
  return new Promise<News>((res) =>
    res({
      page: request.page,
      lastPage: Math.ceil(news.length / request.count),
      count: result.length,
      data: result,
    })
  );
}
