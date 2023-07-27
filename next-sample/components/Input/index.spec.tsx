import {
  render,
  screen,
  RenderResult,
  fireEvent,
} from "@testing-library/react";
import { Input } from "./index";

describe("Input", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Input id="test-name" label="name" />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it("should empty in input on initial render", () => {
    const inputNode = screen.getByLabelText("name") as HTMLInputElement;

    expect(inputNode).toHaveValue("");
  });

  it("should update input value when user types", () => {
    const inputText = "Text Input text";
    const inputNode = screen.getByLabelText("name") as HTMLInputElement;

    // fireEvent でイベントを発火させる。
    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode).toHaveValue(inputText);
  });

  it("should reset input value when reset button is clicked", () => {
    const inputText = "Text Input text";
    const inputNode = screen.getByLabelText("name") as HTMLInputElement;

    fireEvent.change(inputNode, { target: { value: inputText } });

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    expect(inputNode).toHaveValue("");
  });
});
