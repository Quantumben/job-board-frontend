import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { User } from "../../types/user";

interface AuthState {
  user: User | null;
  initialized: boolean;
}

const initialState: AuthState = {
  user: null,
  initialized: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.initialized = true;
    },

    clearUser: (state) => {
      state.user = null;
      state.initialized = true;
    },

    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
  },
});

export const { setUser, clearUser, setInitialized } = authSlice.actions;

export default authSlice.reducer;
