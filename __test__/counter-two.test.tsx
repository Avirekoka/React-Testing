import CounterTwo from "@/component/counter-two";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Testing of Counter function", () => {
  it("Counter Heading testings", () => {
    render(<CounterTwo />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent(/Counter Two/);
  });

  it("Handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn(() => "Mocked Valye");
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        counter={0}
        handleDecreament={decrementHandler}
        handleIncreament={incrementHandler}
      />,
    );

    const increamentCounterButton = screen.getByRole("button", {
      name: "Increament",
    });
    const decreamentCounterButton = screen.getByRole("button", {
      name: "Decreament",
    });

    await user.click(increamentCounterButton);
    await user.click(decreamentCounterButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
