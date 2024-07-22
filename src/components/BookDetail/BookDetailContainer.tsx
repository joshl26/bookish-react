import React, { useEffect } from "react";
import useBook from "hooks/useBook";
import BookDetail from "./BookDetail";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import { fetchBookDetails } from "slices/bookDetailsSlice";

const BookDetailContainer = () => {
  const { id = "" } = useParams<string>();
  const { book } = useSelector((state: RootState) => ({
    book: state.detail.book,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch]);

  return <BookDetail book={book} />;
};

export default BookDetailContainer;
