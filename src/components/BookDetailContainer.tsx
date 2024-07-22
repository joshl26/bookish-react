import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Book } from "types";
import axios from "axios";

const BookDetailContainer = () => {
  const { id } = useParams<string>();
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(book.data);
    };
    fetchBook();
  }, [id]);

  return (
    <div className="detail">
      <h2 className="book-title">{book && book.name}</h2>
    </div>
  );
};

export default BookDetailContainer;
