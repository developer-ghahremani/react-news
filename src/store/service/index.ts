import { NewsBaseUrl, newsApi } from "./news";

import { axiosBaseQuery } from "./AxiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { cryptoAPI } from "./crypto";

const newsService = createApi({
  reducerPath: "service",
  baseQuery: axiosBaseQuery({
    baseURL: NewsBaseUrl,
  }),
  endpoints: (builder) => ({
    ...newsApi(builder),
    ...cryptoAPI(builder),
  }),
});

export const {
  useGetTopHeadlineNewsQuery,
  useGetCoinsQuery,
  useGetCoinQuery,
  useGetCoinHistoryQuery,
} = newsService;
export default newsService;
