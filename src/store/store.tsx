import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../slices/bookListSlice";
import bookDetailsReducer from "../slices/bookDetailsSlice";

const store = configureStore({
  reducer: {
    list: bookListReducer,
    detail: bookDetailsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
