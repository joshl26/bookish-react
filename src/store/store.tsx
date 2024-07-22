import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../slices/bookListSlice";

const store = configureStore({
  reducer: {
    list: bookListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
