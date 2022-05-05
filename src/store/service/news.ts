import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { NewsModel } from "models/News.model";
import { NewsResponse } from "models/NewsResponse.model";
import { newsEndpoints } from "constant";

export const NewsBaseUrl = "https://newsapi.org/v2";

export const newsApi = (
  builder: EndpointBuilder<
    BaseQueryFn<
      { url: string; method: string | undefined; data?: any; params?: any },
      unknown,
      unknown,
      {},
      {}
    >,
    never,
    "service"
  >
) => ({
  getTopHeadlineNews: builder.query<NewsResponse<NewsModel[]>, { q: string }>({
    query: (params) => ({
      url: newsEndpoints.topHeadlines,
      params,
      method: "GET",
    }),
  }),
});
