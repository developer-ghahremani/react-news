import { Coin, CoinHistoryPrice } from "models/Coin.model";

import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
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
  getCoin: builder.query<CoinResponse<{ coin: Coin }>, { uuid?: string }>({
    query: ({ uuid = "Qwsogvtv82FCd" }) => ({
      url: `${coinEndpoint.coin}/${uuid}`,
      method: "GET",
    }),
  }),
  getCoinHistory: builder.query<
    CoinResponse<{ change: string; history: CoinHistoryPrice[] }>,
    { uuid: string; timePeriod?: string }
  >({
    query: ({ uuid, timePeriod = "24h" }) => ({
      url: `${coinEndpoint.coin}/${uuid}/history?timePeriod=${timePeriod}`,
      method: "GET",
    }),
  }),
});
