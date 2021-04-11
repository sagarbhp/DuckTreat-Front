import { render, screen } from "@testing-library/react";

import Home from "../components/home";

describe("Home Component", () => {
  it("Renders properly", () => {
    render(<Home />);
    expect(
      screen.getByText("Welcome To", { exact: false })
    ).toBeInTheDocument();
  });
});
