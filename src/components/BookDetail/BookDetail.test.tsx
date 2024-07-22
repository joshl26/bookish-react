import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail";

describe("BookDetail", () => {
  it("renders title", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
      },
    };

    render(<BookDetail {...props} />);

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

    render(<BookDetail {...props} />);

    const description = screen.getByText(props.book.description);
    expect(description).toBeInTheDocument();
  });
});
