import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import CreatePage from "./CreatePage";
import store from "../../store/store";

describe("CreatePage tests", () => {
  test("Smoke test CreatePage", () => {
    render(
      <Provider store={store}>
        <CreatePage />
      </Provider>
    );
  });
});
