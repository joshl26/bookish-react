export type Book = {
  id: number;
  name: string;
  description?: string;
};

export type AppStateType = {
  books: Book[];
  loading: boolean;
  error: boolean;
  term: string;
};

export const initialState: AppStateType = {
  books: [],
  loading: false,
  error: false,
  term: "",
};

