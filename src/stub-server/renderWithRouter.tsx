import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router";

export const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<Router>{component}</Router>),
  };
};
