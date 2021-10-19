import Button from "./Button";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const props = {
  text: "button text",
  func: jest.fn(),
  className: "test-class",
};

describe("Testing Button component", () => {
  test("Testing Button props", () => {
    const { getByText } = render(<Button {...props} />);
    const button = getByText(props.text);
  });

  test("Testing Button get className", () => {
    const { container } = render(<Button {...props} />);
    expect(container.getElementsByClassName(props.className).length > 0).toBe(
      true
    );
  });
  test("Testing Button function work", () => {
    const { getByText } = render(<Button {...props} />);
    const button = getByText(props.text);

    expect(props.func).not.toHaveBeenCalled();

    userEvent.click(button);
    expect(props.func.mock.calls.length).toBe(1);
  });
});
