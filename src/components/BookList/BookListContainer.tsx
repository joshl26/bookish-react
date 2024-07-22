import React, { useEffect } from "react";
import BookList from "./BookList";
import useBooks from "../../hooks/useBooks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import { fetchBooks } from "slices/bookListSlice";
import SearchBox from "components/SearchBox";

const BookListContainer = () => {
  const { loading, error, setTerm, term } = useBooks();

  const { books } = useSelector((state: RootState) => ({
    books: state.list.books,
  }));

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBooks(""));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }
  return (
    <>
      <SearchBox term={term} onSearch={setTerm} />
      <BookList books={books} />
    </>
  );
};

export default BookListContainer;
