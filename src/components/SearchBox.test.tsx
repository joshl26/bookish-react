import { act, render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../slices/bookListSlice";
import { Provider } from "react-redux";

const mockStore = configureStore({
  reducer: {
    list: bookListReducer,
  },
});

describe("Searchbox", () => {
  it("renders input", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(
      <Provider store={mockStore}>
        <SearchBox {...props} />
      </Provider>
    );
    const input = screen.getByRole("textbox");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(input, "domain");
    });

    const state = mockStore.getState();
    expect(state.list.term).toEqual("domain");
  });

  it("trims empty strings", () => {
    const props = {
      term: "",
      onSearch: jest.fn(),
    };

    render(
      <Provider store={mockStore}>
        <SearchBox {...props} />
      </Provider>
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, " ");

    expect(props.onSearch).not.toHaveBeenCalled();
  });
});
