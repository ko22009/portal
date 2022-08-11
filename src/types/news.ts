type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type RequestNews = {
  page: number;
  count: number;
};

export type News = {
  page: number;
  lastPage: number;
  count: number;
  data: Post[];
};
