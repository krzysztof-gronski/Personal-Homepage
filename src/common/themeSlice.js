import { createSlice } from "@reduxjs/toolkit";
import { getIsDarkThemeFromLocalStorage } from "./ThemeSwitch/isDarkThemeLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: getIsDarkThemeFromLocalStorage(),
  },
  reducers: {
    // toggleTheme: (state) => {
    //   state.isDarkTheme = !state.isDarkTheme;
    // },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeSliceState = (state) => state.theme;
export const selectIsDarkTheme = (state) =>
  selectThemeSliceState(state).isDarkTheme;

export default themeSlice.reducer;
