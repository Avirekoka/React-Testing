import MUIMode from "@/component/mui-mode";
import { AppProvider } from "@/providers/theme-provider";
import { render, screen } from "@testing-library/react";

describe("Testing of MUI Component", () => {
  it("MUI Rending Component", () => {
    render(<MUIMode />, {
      wrapper: AppProvider,
    });
    const muiElement = screen.getByRole("heading", { level: 1 });
    expect(muiElement).toHaveTextContent("light mode");
  });
});
