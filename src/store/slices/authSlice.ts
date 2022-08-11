import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface TimelineSlice {
  authenticated: boolean;
  error: boolean;
}

export const authSlice = createSlice({
  name: "authSlice",
  initialState: (): TimelineSlice => {
    return {
      authenticated: JSON.parse(localStorage.getItem("authenticated"))
        ?.authenticated,
      error: false,
    };
  },
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
      localStorage.setItem("authenticated", JSON.stringify(state));
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
  },
});

export const { setAuthenticated, setError } = authSlice.actions;
export const getAuthenticated = (state: RootState) => state.auth.authenticated;
export const getError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
