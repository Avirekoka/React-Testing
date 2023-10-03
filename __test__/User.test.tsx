import { screen, render } from "@testing-library/react";
import Users from "@/component/user";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("User Testing", () => {
  it("Render User component correctly", () => {
    render(<Users />);
    const userTest = screen.getByRole("heading");
    expect(userTest).toHaveTextContent(/Users Data/);
  });

  it("Test users data correctly", async () => {
    render(<Users />);
    const getUserList = await screen.findAllByRole("listitem");
    expect(getUserList).toHaveLength(3);
  });

  it("Testing of Error", () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        (req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );

    render(<Users />);
    const errorText = screen.findByText(/Occured Exception/);
    expect(errorText).toBeInTheDocument();
  });
});
