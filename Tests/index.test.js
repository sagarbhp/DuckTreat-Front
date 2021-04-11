import { render, screen } from "@testing-library/react";

import Home from "../components/home";
import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";

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

describe("Footer Component", () => {
  it("Renders properly", () => {
    render(<Footer />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Thank You For Your Participation"
    );
  });
});
