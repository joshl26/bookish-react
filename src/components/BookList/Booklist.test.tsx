import React from "react";
import { screen } from "@testing-library/react";

import BookList from "./BookList";
import { renderWithRouter } from "stub-server/renderWithRouter";

describe("Booklist", () => {
  it("render books", async () => {
    const props = {
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
      ],
    };
    renderWithRouter(<BookList {...props} />);

    const headings = await screen.findAllByRole("heading");

    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.books[index].name);
    });
  });
});
