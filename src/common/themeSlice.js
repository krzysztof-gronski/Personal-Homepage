import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme, } = themeSlice.actions;

const selectThemeSliceState = (state) => state.theme;
export const selectIsDarkTheme = (state) =>
  selectThemeSliceState(state).isDarkTheme;

export default themeSlice.reducer;
