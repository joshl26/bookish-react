import React from "react";
import { Book } from "types";

const BookDetail = ({ book }: { book: Book }) => {
  const getDescriptionFor = (book: Book) => {
    return book.description ? book.description : book.name;
  };

  return (
    <div className="detail">
      <h2 className="book-title">{book && book.name}</h2>
      <p className="book-description" data-testid="book-description">
        {getDescriptionFor(book)}
      </p>
    </div>
  );
};

export default BookDetail;
