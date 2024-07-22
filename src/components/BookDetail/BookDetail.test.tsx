import { screen } from "@testing-library/react";
import BookDetail from "./BookDetail";
import { renderWithRouter } from "stub-server/renderWithRouter";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };

    renderWithRouter(<BookDetail {...props} />);

    const title = screen.getByRole("heading");
    expect(title.innerHTML).toEqual(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques " +
          "that hundreds of thousands of developers have used to improve " +
          "their software.",
      },
    };

    renderWithRouter(<BookDetail {...props} />);

    const description = screen.getByText(props.book.description);
    expect(description).toBeInTheDocument();
  });

  it("displays the book name when no description was given", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };
    renderWithRouter(<BookDetail {...props} />);

    const description = screen.getByTestId("book-description");
    expect(description).toHaveTextContent(props.book.name);
  });

  // it("Shows *more* link when description is too long", () => {
  //   const props = {
  //     book: {
  //       id: 1,
  //       name: "Refactoring",
  //       description: "The book about how to do refactoring...",
  //     },
  //   };
  //   renderWithRouter(<BookDetail {...props} />);
  //   const link = screen.getByText("Show more...");
  //   expect(link).toBeInTheDocument();

  //   const description = screen.getByTestId("book-description");
  //   expect(description).toHaveTextContent(
  //     "The book about how to do refactoring..."
  //   );
  // });
});
