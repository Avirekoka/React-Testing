import { Application } from "@/component/Application";
import { render, screen } from "@testing-library/react";

describe("Application component testing", () => {
  //Get by role queries
  // it('Renders Input Elements correctly', () => {
  //     render(<Application />);
  //     const nameElement = screen.getByRole('textbox');
  //     expect(nameElement).toBeInTheDocument();

  //     const jobLocationElement = screen.getByRole('combobox');
  //     expect(jobLocationElement).toBeInTheDocument();

  //     const termElement = screen.getByRole('checkbox');
  //     expect(termElement).toBeInTheDocument();

  //     const submitButton = screen.getByRole('button');
  //     expect(submitButton).toBeInTheDocument();

  // });
  describe("Get By Role", () => {
    it("Testing get by role", () => {
      render(<Application />);
      const nameElement = screen.getByRole("textbox", { name: "Name" });
      expect(nameElement).toBeInTheDocument();

      const jobLocationElement = screen.getByRole("combobox");
      expect(jobLocationElement).toBeInTheDocument();

      const termElement = screen.getByRole("checkbox", { checked: false });
      expect(termElement).toBeInTheDocument();

      const resetButton = screen.getByRole("button", { name: "Reset" });
      expect(resetButton).toBeInTheDocument();

      const submitButton = screen.getByRole("button", { name: "Submit" });
      expect(submitButton).toBeInTheDocument();

      const headingForm = screen.getByRole("heading", { name: "Form" });
      expect(headingForm).toBeInTheDocument();

      const levelHeading = screen.getByRole("heading", { level: 2 });
      expect(levelHeading).toBeInTheDocument();
    });
  });

  describe("Get By Label Text", () => {
    it("Testing of get by label text", () => {
      render(<Application />);
      const nameLabelText = screen.getByLabelText("Name", {
        selector: "input",
      });
      expect(nameLabelText).toBeInTheDocument();
    });
  });

  describe("Get By Place holder", () => {
    it("Testing of get by place holder text", () => {
      render(<Application />);
      const placeHolderText = screen.getByPlaceholderText("FullName");
      expect(placeHolderText).toBeInTheDocument();
    });
  });

  describe("Get By Text", () => {
    it("Testing of get by text", () => {
      render(<Application />);
      const placeHolderText = screen.getByText("This is my form testing");
      expect(placeHolderText).toBeInTheDocument();
    });
  });

  describe("Get By Display Value", () => {
    it("Testing of Get By Display Value", () => {
      render(<Application />);
      const displayValue = screen.getByDisplayValue("Avinash");
      expect(displayValue).toBeInTheDocument();
    });
  });

  describe("Get By Alt Text", () => {
    it("Testing of Get By Alt Text", () => {
      render(<Application />);
      const altValue = screen.getByAltText("This is dummy image");
      expect(altValue).toBeInTheDocument();
    });
  });

  describe("Get By Title", () => {
    it("Testing of Get By Title", () => {
      render(<Application />);
      const getByTitle = screen.getByTitle("Dummy Title");
      expect(getByTitle).toBeInTheDocument();
    });
  });

  describe("Get By Test Id", () => {
    it("Testing of Get By Test Id", () => {
      render(<Application />);
      const getByTestId = screen.getByTestId("custom html element");
      expect(getByTestId).toBeInTheDocument();
    });
  });
});
