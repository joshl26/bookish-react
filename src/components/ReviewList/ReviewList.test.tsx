import { render, screen } from "@testing-library/react";
import ReviewList from "./ReviewList";
import BookDetail from "components/BookDetail/BookDetail";

describe("ReviewList", () => {
  it("renders an empty list", () => {
    const reviews = [
      {
        id: 1,
        bookId: 1,
        name: "Juntao Qiu",
        date: "2023/06/01",
        content: "Excellent work, really impressed by your efforts",
      },
    ];
    render(<ReviewList reviews={reviews} />);
    expect(screen.getByTestId("reviews-container")).toBeInTheDocument();
  });

  it("renders a list when data is passed", () => {
    const reviews = [
      {
        id: 1,
        bookId: 1,
        name: "Juntao Qiu",
        date: "2023/06/01",
        content: "Excellent work, really impressed by your efforts",
      },
      {
        id: 2,
        bookId: 1,
        name: "Abruzzi Kim",
        date: "2023/06/22",
        content: "What a great book",
      },
    ];
    render(<ReviewList reviews={reviews} />);
    const items = screen.getAllByTestId("review");
    expect(items.length).toBe(2);
  });

  it("renders reviews", () => {
    const props = {
      book: {
        id: 1,
        name: "Refactoring",
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques...",
        reviews: [
          {
            id: 1,
            bookId: 1,
            name: "Juntao",
            date: "2023/06/21",
            content: "Excellent work, really impressed by your efforts",
          },
        ],
      },
    };
    render(<BookDetail {...props} />);

    const reviews = screen.getAllByTestId("review");
    expect(reviews.length).toBe(1);
    expect(reviews[0].innerHTML).toEqual(
      "Excellent work, really impressed by your efforts"
    );
  });
});
