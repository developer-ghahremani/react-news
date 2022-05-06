import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Coin } from "models/Coin.model";

const initialState: Coin[] = [];

const favoriteCoins = createSlice({
  initialState,
  name: "favoriteCoins",
  reducers: {
    toggleFavorite: (state, coin: PayloadAction<Coin>) => {
      const index = state.findIndex((item) => item.uuid === coin.payload.uuid);
      if (index < 0) return [...state, coin.payload];
      return state.filter((item) => item.uuid !== coin.payload.uuid);
    },
  },
});

export const { toggleFavorite } = favoriteCoins.actions;
export default favoriteCoins;
