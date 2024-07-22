import React, { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "types";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const fetchBooks = async (term: string) => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:8080/books?q=${term}&_sort=id`
        );
        setBooks(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks(term);
  }, [term]);

  return {
    loading,
    error,
    books,
    setTerm,
    term,
  };
};

export default useBooks;
