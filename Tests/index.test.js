import { render, screen } from "@testing-library/react";

import Home from "../components/home";
import Header from "../components/header";

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
