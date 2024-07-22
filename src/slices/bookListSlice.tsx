import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Book, initialState } from "types";

export const bookListSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { setTerm } = bookListSlice.actions;

export default bookListSlice.reducer;

export const fetchBooks = createAsyncThunk<Book[], string>(
  "books/search",
  async (term: string = "") => {
    const response = await axios.get(
      `http://localhost:8080/books?q=${term}&_sort=id`
    );

    return response.data;
  }
);
