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
});
