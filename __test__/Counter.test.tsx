import Counter from "@/component/counter";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
describe("Counter Rendering", () => {
  it("Testing of Counter", () => {
    render(<Counter />);
    const headinElement = screen.getByRole("heading", { level: 1 });
    expect(headinElement).toBeInTheDocument();

    const increamentButton = screen.queryByRole("button", {
      name: "Increment",
    });
    expect(increamentButton).toBeInTheDocument();
  });

  it("render a count of 0", () => {
    render(<Counter />);

    const counterText = screen.getByRole("heading", { level: 1 });
    expect(counterText).toHaveTextContent("0");
  });

  it("render a count of 1 on click event", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);

    const counterElement = screen.getByRole("heading", { level: 1 });
    expect(counterElement).toHaveTextContent("1");
  });

  it("Render a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const getSetButton = screen.getByRole("button", { name: "Amount" });
    await user.click(getSetButton);

    const getFinalAmount = screen.getByRole("heading", { level: 2 });
    expect(getFinalAmount).toHaveTextContent("10");
  });

  it("elements are focused in the right direction", async () => {
    user.setup();
    render(<Counter />);
    const increamentButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const AmountButton = screen.getByRole("button", { name: "Amount" });

    await user.tab();
    expect(increamentButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(AmountButton).toHaveFocus();
  });
});
