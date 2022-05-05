import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { Coin } from "models/Coin.model";
import { CoinResponse } from "models/CoinResponse.model";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { coinEndpoint } from "constant";

export const cryptoAPI = (
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
  getCoins: builder.query<
    CoinResponse<{ coins: Coin[] }>,
    {
      offset?: number;
      limit?: number;
      orderBy?: string;
      orderDirection?: string;
    }
  >({
    query: (params) => ({ url: coinEndpoint.coins, method: "GET", params }),
  }),
});
