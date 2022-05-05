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
    params.apiKey = "03c6dc7bfbdd45ac8eab98aa84580a4c";
    const values = Object.values(coinEndpoint);
    const isCoinEndpoint = values.find((item) => item === value.url);
    if (isCoinEndpoint) value.baseURL = "https://api.coinranking.com/v2";
    if (value.baseURL === NewsBaseUrl) value.params = params;
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
