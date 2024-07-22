import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";
import userEvent from "@testing-library/user-event";

describe("Searchbox", () => {
  it("renders input", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(<SearchBox {...props} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "domain");

    expect(props.onSearch).toHaveBeenCalled();
  });

  it("trims empty strings", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(<SearchBox {...props} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, " ");

    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
