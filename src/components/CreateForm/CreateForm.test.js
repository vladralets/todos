import { CreateForm } from "./CreateForm";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
const val = {
  classBtn: ".order-submit",
};

describe("Testing TodoForm component", () => {
  test("Testing TodoForm btn exists", () => {
    const mock = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <CreateForm __testFunc__={mock} />
      </Provider>
    );
    const button = container.querySelector('button[type="submit"]');
  });

  test("Testing TodoForm submit function work", async () => {
    const mock = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <CreateForm __testFunc__={mock} />
      </Provider>
    );
    const title = container.querySelector('input[name="title"]');
    const description = container.querySelector('input[name="description"]');
    const button = container.querySelector('button[type="submit"]');
    await waitFor(() => {
      fireEvent.change(title, {
        target: {
          value: "Buy some food",
        },
      });
    });
    await waitFor(() => {
      fireEvent.change(description, {
        target: {
          value: "Need to go to shop",
        },
      });
    });

    expect(mock).not.toHaveBeenCalled();
    await waitFor(() => {
      fireEvent.click(button);
      expect(mock.mock.calls.length).toBe(1);
    });
  });
});
