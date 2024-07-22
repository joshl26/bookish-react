import React from "react";
import BookList from "./BookList";
import useBooks from "../../hooks/useBooks";
import { TextField } from "@mui/material";

const BookListContainer = () => {
  const { loading, error, books, setTerm, term } = useBooks();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }
  return (
    <>
      <TextField
        label="Search"
        value={term}
        data-test="search"
        onChange={(e) => setTerm(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <BookList books={books} />
    </>
  );
};

export default BookListContainer;
