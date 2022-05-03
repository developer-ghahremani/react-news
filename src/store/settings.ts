import { createSlice } from "@reduxjs/toolkit";

interface SettingsInterface {
  darkMode: boolean;
}

const initialState: SettingsInterface = { darkMode: false };
const settings = createSlice({
  initialState,
  name: "settings",
  reducers: {
    toggleDarkMode: (state) => {
      return { ...state, darkMode: !state.darkMode };
    },
  },
});

export const { toggleDarkMode } = settings.actions;

export default settings;
