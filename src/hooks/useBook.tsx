import React, { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "types";
import { useParams } from "react-router";

const useBook = () => {
  const { id } = useParams<string>();
  const [book, setBook] = useState<Book>({ id: 0, name: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await axios.get(`http://localhost:8080/books/${id}`);
        setBook(book.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  return {
    loading,
    error,
    book,
  };
};

export default useBook;
