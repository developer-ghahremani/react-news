import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { NewsBaseUrl } from "./news";
import { coinEndpoint } from "constant";
import { newsEndpoints } from "./../../constant/endpoints";
import sources from "constant/source";

export const axiosBaseQuery = (
  { baseURL }: { baseURL: string } = { baseURL: "" }
): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
  },
  unknown,
  unknown
> => {
  const api = axios.create({ baseURL });

  api.interceptors.request.use((value) => {
    const params = { ...value.params };
    const headers = { ...value.headers };

    const values = Object.values(coinEndpoint);
    const isCoinEndpoint = values.find((item) => value.url?.includes(item));

    if (isCoinEndpoint) {
      value.baseURL = "https://api.coinranking.com/v2";

      headers["x-access-token"] =
        "coinranking2810f93573dd342eb4079572732a3a7bee6d621da0cdbc08";

      params["x-access-token"] =
        "coinranking2810f93573dd342eb4079572732a3a7bee6d621da0cdbc08";
    }

    if (value.baseURL === NewsBaseUrl)
      params.apiKey = "03c6dc7bfbdd45ac8eab98aa84580a4c";

    value.headers = headers;
    value.params = params;

    return value;
  });

  api.interceptors.response.use((value) => {
    if (value.config.url === newsEndpoints.topHeadlines)
      return {
        ...value,
        data: {
          ...value.data,
          articles: [...value.data.articles].map((article) => ({
            ...article,
            source: sources.find((item) => item.id === article.source.id),
          })),
        },
      };
    return value;
  });

  return async ({ url, method, data, params }) => {
    try {
      const result = await api({ url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};
