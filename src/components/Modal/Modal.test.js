import Modal from "./Modal";
import Button from "../Button/Button";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const props = {
  header: "header text",
  text: "MODAL TEXT",
  func: jest.fn(),
  actions: [<Button text="button text" key={"btnKey"} />],
};

describe("Testing Modal component", () => {
  test("Testing Modal props", () => {
    const { getByText } = render(<Modal {...props} />);
    const text = getByText(props.text);
  });

  test("Testing Modal render Actions", () => {
    const { getByText } = render(<Modal {...props} />);
    const button = getByText("button text");
    expect(button.type).toBe("submit");
  });
  test("Testing Modal function work", () => {
    const { getByText } = render(<Modal {...props} />);
    const button = getByText("button text");
    expect(props.func).not.toHaveBeenCalled();
    userEvent.click(button);
    expect(props.func.mock.calls.length).toBe(1);
  });
});
