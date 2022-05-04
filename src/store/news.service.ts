import { NewsModel } from "./../models/News.model";
import { NewsResponse } from "./../models/NewsResponse.model";
import { axiosBaseQuery } from "./AxiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const newsService = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  reducerPath: "newsService",
  endpoints: (builder) => ({
    getTopHeadlineNews: builder.query<NewsResponse<NewsModel[]>, { q: string }>(
      {
        query: (params) => ({ url: "/top-headlines", params, method: "GET" }),
      }
    ),
  }),
});

export const { useGetTopHeadlineNewsQuery } = newsService;
export default newsService;
