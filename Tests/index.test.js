import { render, screen } from "@testing-library/react";

import Home from "../components/home";
import Header from "../components/header";
import Form from "../components/form";

describe("Home Component", () => {
  it("Renders properly", () => {
    render(<Home />);
    expect(
      screen.getByText("Welcome To", { exact: false })
    ).toBeInTheDocument();
  });
});

describe("Header Component", () => {
  it("Renders properly", () => {
    render(<Header />);
    expect(screen.getByText("Duck", { exact: false })).toBeInTheDocument();
  });
});

describe("Form Component", () => {
  it("Renders properly", () => {
    render(<Form />);
    expect(
      screen.getByText("Please fill in the form to help me", { exact: false })
    ).toBeInTheDocument();
  });
});
