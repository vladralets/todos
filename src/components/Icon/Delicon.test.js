import DelIcon from "./DelIcon";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const props = {
  func: jest.fn(),
  className: "test-dell-icon",
};

describe("Testing DellIcon component", () => {
  test("Testing DellIcon props", () => {
    const { container } = render(<DelIcon {...props} />);
    const button = container.querySelector(`.${props.className}`);
  });

  test("Testing DellIcon get className", () => {
    const { container } = render(<DelIcon {...props} />);
    expect(container.getElementsByClassName(props.className).length > 0).toBe(
      true
    );
  });
  test("Testing DellIcon function work", () => {
    const { container } = render(<DelIcon {...props} />);
    const button = container.querySelector(`.${props.className}`);

    expect(props.func).not.toHaveBeenCalled();
    userEvent.click(button);
    expect(props.func.mock.calls.length).toBe(1);
  });
});
