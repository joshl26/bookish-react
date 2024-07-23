import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "types";

type BookDetailType = {
  book: Book;
  loading: boolean;
  error: boolean;
};

const initialState: BookDetailType = {
  book: {
    id: 0,
    name: "",
    reviews: [],
  },
  loading: false,
  error: false,
};

export const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchBookDetails.fulfilled, (state, action) => {
      state.book = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBookDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default bookDetailsSlice.reducer;

export const fetchBookDetails = createAsyncThunk<Book, string>(
  "bookDetails/fetch",
  async (id) => {
    const response = await axios.get(`http://localhost:8080/books/${id}`);
    return response.data;
  }
);
