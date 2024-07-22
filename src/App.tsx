import React from "react";
import { Typography } from "@mui/material";
import BookListContainer from "components/BookListContainer";
import BookDetailContainer from "components/BookDetailContainer";

import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
