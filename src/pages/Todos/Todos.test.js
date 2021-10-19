import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Todos from "./Todos";
import store from "../../store/store";

describe("Todos tests", () => {
  test("Smoke test Todos", () => {
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  });
});
