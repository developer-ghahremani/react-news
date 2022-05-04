import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import sources from "constant/source";

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: "" }
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
  axios.interceptors.request.use((value) => {
    const params = { ...value.params };
    params.apiKey = "03c6dc7bfbdd45ac8eab98aa84580a4c";
    value.params = params;
    return value;
  });

  axios.interceptors.response.use((value) => {
    if (value.config.url === "https://newsapi.org/v2/top-headlines")
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
      const result = await axios({ url: baseUrl + url, method, data, params });
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
