import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/search";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
