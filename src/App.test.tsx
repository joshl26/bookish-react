import { render, screen } from "@testing-library/react";
import App from "App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "store/store";

const customRender = (component: JSX.Element) => {
  return {
    ...render(
      <Provider store={store}>
        <Router>{component}</Router>
      </Provider>
    ),
  };
};

it("renders bookish", () => {
  customRender(<App />);
  const heading = screen.getByText(/Bookish/i);
  expect(heading).toBeInTheDocument();
});
